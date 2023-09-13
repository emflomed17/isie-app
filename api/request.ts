// 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

interface ChatInteraction {
  message: string;
  isNewInteraction: boolean;
}

export const interactWithChat = async ({
  message,
  isNewInteraction = false,
}: ChatInteraction) => {
  try {
    const shouldFail = message.includes("error");
    const completion = await fakeOpenaiApiResponse(message, shouldFail);
    return completion;
  } catch (error) {
    console.log(error);
    return {
      error: "Error interacting with the chat",
    };
  }
};

const fakeOpenaiApiResponse = async (userInput: string, shouldFail = false) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const id = crypto.randomUUID();
      const unixDate = getUnixTimestampFromDate();
      const responseObject = {
        status: "success",
        data: {
          id: `chatcmpl-${id}`,
          object: "chat.completion",
          created: unixDate,
          model: "gpt-3.5-turbo-0613",
          choices: [
            {
              index: 0,
              message: {
                role: "assistant",
                content: `This is the answer for: ${userInput}`,
              },
              finish_reason: "stop",
            },
          ],
          usage: {
            prompt_tokens: 19,
            completion_tokens: 9,
            total_tokens: 28,
          },
        },
      };
      return shouldFail
        ? reject("There was an error. Please try again")
        : resolve(responseObject);
    }, 1500);
  });

  //     setTimeout(() => {
  //       const responseObject = {
  //         status: "success",
  //         data: {
  //           id: "chatcmpl-7wYkG1GEjSjsRUP1b4uxE6Qm6vpcD",
  //           object: "chat.completion",
  //           created: 1694190940,
  //           model: "gpt-3.5-turbo-0613",
  //           choices: [
  //             {
  //               index: 0,
  //               message: {
  //                 role: "assistant",
  //                 content: "Hello! How can I assist you today?",
  //               },
  //               finish_reason: "stop",
  //             },
  //           ],
  //           usage: {
  //             prompt_tokens: 19,
  //             completion_tokens: 9,
  //             total_tokens: 28,
  //           },
  //         },
  //       };
  //       resolve(responseObject);
  //     }, 1500);
  //   });
};

const getUnixTimestampFromDate = () => {
  const currentDate = new Date();
  const unixTimestampSeconds = Math.floor(currentDate.getTime() / 1000);
  return unixTimestampSeconds;
};
