"use client";
import { v4 as uuidv4 } from "uuid";
import React, {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  useState,
  useCallback,
  useEffect,
} from "react";
import { ChatCompletion } from "@/utils/types";
import useLocalStorage from "@/hooks/localStorage";

interface LocalMessage {
  role: string;
  content: string;
}

// Define the chat type
interface Chat {
  id: string;
  title: string;
  createdAt: number;
  messages: LocalMessage[];
}

interface CreateChatParams {
  id: string;
  question: string;
  response: ChatCompletion;
}

interface UpdateChatParams {
  idToUpdate: string;
  question: string;
  response: ChatCompletion;
}

const initialState: Chat[] = [];

interface ChatContextType {
  chat: Chat | {};
  chats: Chat[];
  createChat: ({ id, question, response }: CreateChatParams) => void;
  updateChat: ({ idToUpdate, question, response }: UpdateChatParams) => void;
  deleteChat: (chatId: number) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [chat, setChat] = useState<Chat | {}>({});
  const [chats, setChats] = useLocalStorage("chats", initialState);

  const createChat = ({ id, question, response }: CreateChatParams) => {
    const unixDate = Date.now() / 1000;
    const userMessage: LocalMessage = {
      role: "user",
      content: question,
    };
    const assistantMessage: LocalMessage = response.choices[0].message;

    const newChat: Chat = {
      id,
      title: question,
      createdAt: unixDate,
      messages: [userMessage, assistantMessage],
    };
    const newChats = [newChat, ...chats];
    setChats(newChats);
    setChat(newChat);
  };

  function updateChat({ idToUpdate, question, response }: UpdateChatParams) {
    const userMessage: LocalMessage = {
      role: "user",
      content: question,
    };
    const assistantMessage: LocalMessage = response.choices[0].message;

    const updatedChats = chats.map((item: Chat) => {
      if (item.id === idToUpdate) {
        // Create a new item with updated messages array
        const updatedItem: Chat = {
          ...item,
          messages: [...item.messages, userMessage, assistantMessage],
        };
        return updatedItem;
      }
      return item;
    });
    setChats(updatedChats);
  }

  const deleteChat = (chatId: number) => {};

  return (
    <ChatContext.Provider
      value={{ chat, chats, createChat, updateChat, deleteChat }}
    >
      {children}
    </ChatContext.Provider>
  );
};

// Custom hook for accessing the chat context
export const useChatContext = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};
