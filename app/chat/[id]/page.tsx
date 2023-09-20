"use client";
import { useChatContext } from "@/app/ChatContext";
import MessageList from "@/components/MessageList/MessageList";
import { useEffect, useRef } from "react";
import {
  Image,
  Toast,
  ToastBody,
  ToastContainer,
  ToastHeader,
} from "react-bootstrap";
export default function Chat({ params }: { params: { id: string } }) {
  const { chats, errorMessage, setErrorMessage } = useChatContext();
  const currentChat = chats.filter((item) => item.id === params.id);
  const messages =
    currentChat.length > 0
      ? currentChat[0].messages
      : [{ role: "system", content: "" }];

  const isValidChat = currentChat.length > 0;

  return (
    <div>
      <ToastContainer position="top-end">
        <Toast
          show={!!errorMessage}
          onClose={() => setErrorMessage("")}
          bg="danger"
          delay={3000}
          autohide
        >
          <ToastHeader className="toast-custom-header">
            <Image
              src="/warning.png"
              alt="user-image"
              rounded
              height={24}
              width={24}
            />
            &nbsp;
            <strong className="me-auto">Oops!</strong>
            {/* <small>11 mins ago</small> */}
          </ToastHeader>
          <ToastBody className="text-white">{errorMessage}</ToastBody>
        </Toast>
      </ToastContainer>
      <MessageList messages={messages} isValidChat={isValidChat} />
    </div>
  );
}
