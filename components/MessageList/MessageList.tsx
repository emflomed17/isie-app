"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Message from "../Message/Message";
import { v4 as uuidv4 } from "uuid";
import { LocalMessage } from "@/utils/types";
import { useChatContext } from "@/app/ChatContext";

interface MessageListProps {
  messages: LocalMessage[];
  isValidChat: boolean;
}

const MessageList = ({ messages, isValidChat }: MessageListProps) => {
  const { isLoading, currentQuestion, errorMessage, setErrorMessage } =
    useChatContext();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isValidChat) {
      setErrorMessage("This chat could not be found");

      setTimeout(() => {
        router.push("/");
        setErrorMessage("");
      }, 2000);
    }
  }, [isValidChat, router, setErrorMessage]);

  console.log(process.env.OPEN_AI_API_KEY);

  return (
    <>
      {isClient ? (
        <div>
          {messages
            .filter((item) => item.role !== "system")
            .map((item) => (
              <div
                key={uuidv4()}
                className={item.role === "assistant" ? "ai-bg" : ""}
              >
                <Message role={item.role} content={item.content} />
              </div>
            ))}
          <div className="empty-space">
            {currentQuestion ? (
              <Message role="user" content={currentQuestion} />
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default MessageList;
