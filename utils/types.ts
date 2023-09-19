export enum ChatType {
  New = "New",
  Existing = "Existing",
}

export interface LocalMessage {
  role: string;
  content: string;
}

export interface Chat {
  id: string;
  title: string;
  createdAt: number;
  messages: LocalMessage[];
}

export interface CreateChatParams {
  id: string;
  question: string;
  response: ChatCompletion;
}

export interface UpdateChatParams {
  idToUpdate: string;
  question: string;
  response: ChatCompletion;
}

export interface ChatCompletion {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    index: number;
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  error?: string;
}

export const localChat = {
  id: "379e858c-c2d2-4d31-98ba-53ea74f7c140",
  title: "This is the title",
  createdAt: 1694915333,
  messages: [
    {
      role: "user",
      content: "This is the question",
    },
    {
      role: "assistant",
      content: "This is the answer",
    },
  ],
};
