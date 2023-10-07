"use client";
import { useChatContext } from "@/app/ChatContext";
import React from "react";
import {
  Image,
  Toast,
  ToastBody,
  ToastContainer,
  ToastHeader,
} from "react-bootstrap";

const ErrorToast = () => {
  const { errorMessage, setErrorMessage } = useChatContext();
  return (
    <ToastContainer position="top-end">
      <Toast
        show={!!errorMessage}
        onClose={() => setErrorMessage("")}
        bg="danger"
        delay={5000}
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
  );
};

export default ErrorToast;
