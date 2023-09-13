import React from "react";
import Message from "../Message/Message";
import { randomUUID } from "crypto";

const MESSAGES = [
  {
    role: "system",
    content: "You are a helpful assistant.",
  },
  {
    role: "user",
    content: "Hello!",
  },
  {
    role: "assistant",
    content: "Hello! How can I assist you today?",
  },
  {
    role: "user",
    content: "What is the most spoken language in the world?",
  },
  {
    role: "assistant",
    content: "Hello! How can I assist you today?",
  },
  {
    role: "user",
    content: "What is the most spoken language in the world?",
  },
  {
    role: "assistant",
    content: "Hello! How can I assist you today?",
  },
  {
    role: "user",
    content: "What is the most spoken language in the world?",
  },
  {
    role: "assistant",
    content: "Hello! How can I assist you today?",
  },
  {
    role: "user",
    content: "What is the most spoken language in the world?",
  },
  {
    role: "assistant",
    content: "Hello! How can I assist you today?",
  },
  {
    role: "user",
    content: "What is the most spoken language in the world?",
  },
  {
    role: "assistant",
    content: "Hello! How can I assist you today?",
  },
  {
    role: "user",
    content: "What is the most spoken language in the world?",
  },
  {
    role: "assistant",
    content: "Hello! How can I assist you today?",
  },
  {
    role: "user",
    content: "What is the most spoken language in the world?",
  },
  {
    role: "user",
    content: "What is the most spoken language in the world?",
  },
  {
    role: "assistant",
    content: "Hello! How can I assist you today?",
  },
  {
    role: "user",
    content: "What is the most spoken language in the world?",
  },
  {
    role: "user",
    content: "What is the most spoken language in the world?",
  },
  {
    role: "assistant",
    content: "Hello! How can I assist you today?",
  },
];

const MessageList = () => {
  return (
    <div className="messages-container">
      {MESSAGES.filter((item) => item.role !== "system").map((item) => (
        <div
          key={randomUUID()}
          className={item.role === "assistant" ? "ai-bg" : ""}
        >
          <Message role={item.role} content={item.content} />
        </div>
      ))}
    </div>
  );
};

export default MessageList;
