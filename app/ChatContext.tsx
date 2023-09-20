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
import {
  Chat,
  ChatCompletion,
  CreateChatParams,
  LocalMessage,
  UpdateChatParams,
} from "@/utils/types";
import useLocalStorage from "@/hooks/localStorage";

const initialState: Chat[] = [];

interface ChatContextType {
  chat: Chat | {};
  chats: Chat[];
  isLoading: boolean;
  currentQuestion: string;
  errorMessage: string;
  setCurrentQuestion: (value: string) => void;
  setIsLoading: (value: boolean) => void;
  createChat: ({ id, question, response }: CreateChatParams) => void;
  updateChat: ({ idToUpdate, question, response }: UpdateChatParams) => void;
  deleteChat: (chatId: number) => void;
  setErrorMessage: (value: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [chat, setChat] = useState<Chat | {}>({});
  const [chats, setChats] = useLocalStorage("chats", initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
  };

  function updateChat({ idToUpdate, question, response }: UpdateChatParams) {
    const userMessage: LocalMessage = {
      role: "user",
      content: question,
    };
    const assistantMessage: LocalMessage = response.choices[0].message;

    const updatedChats = chats.map((item: Chat) => {
      if (item.id === idToUpdate) {
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
      value={{
        chat,
        chats,
        isLoading,
        currentQuestion,
        errorMessage,
        setCurrentQuestion,
        setIsLoading,
        createChat,
        updateChat,
        deleteChat,
        setErrorMessage,
      }}
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
