"use client";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { BsList, BsPlus } from "react-icons/bs";
import Offcanvas from "react-bootstrap/Offcanvas";
import QuestionList from "../QuestionList/QuestionList";
import { useParams, useRouter } from "next/navigation";
import { useChatContext } from "@/app/ChatContext";

const SidebarMobile = () => {
  const { getChatById } = useChatContext();
  const [show, setShow] = useState(false);
  const router = useRouter();
  const params = useParams();

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const handleOnNewChatClick = () => {
    handleClose();
    router.push("/");
  };

  const currentChatId = params?.id as string;

  const chatTitle = getChatById(currentChatId)?.title;

  const titleOverview = chatTitle?.slice(0, 70);

  return (
    <>
      <div className="mobile-bar">
        <Button
          variant="outline-light"
          onClick={toggleShow}
          className="custom-button ms-2 me-2 d-md-none border-0"
        >
          <BsList size="24px" />
        </Button>
        {chatTitle && (
          <p className="mobile-chat-title d-md-none">{titleOverview}</p>
        )}
        <Button
          variant="outline-light"
          onClick={handleOnNewChatClick}
          className="custom-button me-2 d-md-none border-0"
        >
          <BsPlus size="24px" />
        </Button>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header
          closeButton
          closeLabel="Close"
          closeVariant="white"
          className="bg-dark close-offset-btn"
        ></Offcanvas.Header>
        <Offcanvas.Body className="bg-dark text-white">
          <Button
            variant="outline-light"
            className="custom-button new-chat-btn d-md-flex mt-3"
            onClick={handleOnNewChatClick}
          >
            <BsPlus size="20px" /> &nbsp; New Chat
          </Button>

          <QuestionList onItemClick={handleClose} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SidebarMobile;
