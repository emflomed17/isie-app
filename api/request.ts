import { ChatCompletion } from "@/utils/types";

interface ChatInteraction {
  message: string;
  isNewInteraction?: boolean;
}

const API_KEY = "API_KEY_HERE";

export const interactWithChat = async ({
  message,
  isNewInteraction = true,
}: ChatInteraction): Promise<ChatCompletion> => {
  const response = await openAiApi(message);

  if (!response.ok) {
    throw new Error("Something went wrong. Please try again.");
  }

  const responseData = await response.json();

  return responseData;
};

const openAiApi = async (userInput: string): Promise<Response> => {
  const data = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: userInput,
      },
    ],
  };
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
      // Add any other headers as needed
    },
    body: JSON.stringify(data),
  };

  try {
    const response: Response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      requestOptions
    );

    return response;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
};
