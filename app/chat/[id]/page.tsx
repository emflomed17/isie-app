"use client";
import { useChatContext } from "@/app/ChatContext";
import MessageList from "@/components/MessageList/MessageList";
import { useEffect, useRef, useState } from "react";
import { BsArrowDown } from "react-icons/bs";

export default function Chat({ params }: { params: { id: string } }) {
  const { chats } = useChatContext();
  const [showScrollButton, setShowScrollButton] = useState(false);

  const currentChat = chats.filter((item) => item.id === params.id);
  const messages =
    currentChat.length > 0
      ? currentChat[0].messages
      : [{ role: "system", content: "" }];

  const isValidChat = currentChat.length > 0;

  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (messagesContainerRef.current) {
      const isAtBottom =
        messagesContainerRef.current.scrollHeight -
          messagesContainerRef.current.scrollTop ===
        messagesContainerRef.current.clientHeight;
      setShowScrollButton(!isAtBottom);
    }
  };

  useEffect(() => {
    const scrollDelay = setTimeout(() => {
      scrollToBottom();
    }, 200);

    return () => clearTimeout(scrollDelay);
  }, []);

  useEffect(() => {
    let containerRef = messagesContainerRef.current;

    if (containerRef) {
      containerRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (containerRef) {
        containerRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  };

  const scrollToBottomSmoothly = () => {
    if (messagesContainerRef.current) {
      const messagesContainer = messagesContainerRef.current;
      const lastMessage = messagesContainer.lastElementChild;

      if (lastMessage) {
        lastMessage.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    }
  };

  return (
    <>
      {showScrollButton && (
        <button
          type="button"
          onClick={scrollToBottomSmoothly}
          className="scroll-bottom-btn"
        >
          <BsArrowDown size={14} />
        </button>
      )}
      <div className="messages-container" ref={messagesContainerRef}>
        <MessageList messages={messages} isValidChat={isValidChat} />
      </div>
    </>
  );
}
