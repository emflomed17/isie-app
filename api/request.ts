// 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

import { ChatCompletion } from "@/utils/types";

interface ChatInteraction {
  message: string;
  isNewInteraction?: boolean;
}

export const interactWithChat = async ({
  message,
  isNewInteraction = true,
}: ChatInteraction): Promise<ChatCompletion> => {
  // const shouldFail = message.includes("error");
  // const response = await fakeOpenaiApiResponse(message, shouldFail);
  const response = await openAiApi(message);

  if (!response.ok) {
    throw new Error("Network response was not ok");
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
      Authorization: `Bearer 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`,
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

const fakeOpenaiApiResponse = async (
  userInput: string,
  shouldFail = false
): Promise<ChatCompletion | string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const id = "chatcmpl-7wYkG1GEjSjsRUP1b4uxE6Qm6vpcD";
      const unixDate = Date.now() / 1000;
      const responseObject = {
        id,
        object: "chat.completion",
        created: unixDate,
        model: "gpt-3.5-turbo-0613",
        choices: [
          {
            index: 0,
            message: {
              role: "assistant",
              content: `Hello! This is the answer for the question: ${userInput}`,
            },
            finish_reason: "stop",
          },
        ],
        usage: {
          prompt_tokens: 19,
          completion_tokens: 9,
          total_tokens: 28,
        },
      };

      shouldFail
        ? reject("There was an error. Please try again")
        : resolve(responseObject);
    }, 1500); // Simulate an asynchronous delay
  });
};
