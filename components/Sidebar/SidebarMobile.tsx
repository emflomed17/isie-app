"use client";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { BsList, BsPlus } from "react-icons/bs";
import Offcanvas from "react-bootstrap/Offcanvas";
import QuestionList from "../QuestionList/QuestionList";
import { Stack } from "react-bootstrap";
import { useRouter } from "next/navigation";

const SidebarMobile: React.FC = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const handleOnNewChatClick = () => {
    handleClose();
    router.push("/");
  };

  return (
    <>
      <Button
        variant="outline-light"
        onClick={toggleShow}
        className="custom-button me-2 d-md-none mb-2"
      >
        <BsList size="20px" />
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className="bg-dark">
          <Offcanvas.Title className="text-white">Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
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
