"use client";
import { useChatContext } from "@/app/ChatContext";
import ChatHeader from "@/components/ChatHeader/ChatHeader";
import MessageList from "@/components/MessageList/MessageList";
import { useCallback, useEffect, useRef, useState } from "react";
import { BsArrowDown } from "react-icons/bs";

export default function Chat({ params }: { params: { id: string } }) {
  const { chats } = useChatContext();
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const [prevScrollTop, setPrevScrollTop] = useState(0);

  const currentChat = chats.filter((item) => item.id === params.id);
  const messages =
    currentChat.length > 0
      ? currentChat[0].messages
      : [{ role: "system", content: "" }];

  const isValidChat = currentChat.length > 0;

  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    {
      if (messagesContainerRef.current) {
        const scrollTop = messagesContainerRef.current.scrollTop;

        const isAtBottom =
          messagesContainerRef.current.scrollHeight -
            messagesContainerRef.current.scrollTop ===
          messagesContainerRef.current.clientHeight;

        setShowScrollButton(!isAtBottom);

        if (scrollTop > prevScrollTop) {
          setIsScrollingDown(false);
        } else {
          setIsScrollingDown(true);
        }
        setPrevScrollTop(scrollTop);
      }
    }
  }, [prevScrollTop]);

  useEffect(() => {
    const scrollDelay = setTimeout(() => {
      scrollToBottom();
    }, 200);

    return () => clearTimeout(scrollDelay);
  }, []);

  useEffect(() => {
    const showHeaderDelay = setTimeout(() => {
      setIsScrollingDown(true);
    }, 250);

    return () => clearTimeout(showHeaderDelay);
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
  }, [handleScroll]);

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
      {isScrollingDown && <ChatHeader />}
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
