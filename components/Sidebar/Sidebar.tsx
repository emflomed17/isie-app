"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { BsLayoutSidebar, BsPlus } from "react-icons/bs";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  Row,
  Stack,
} from "../../lib/react-bootstrap";
import SidebarMobile from "./SidebarMobile";
import QuestionPreview from "../QuestionPreview/QuestionPreview";
import QuestionList from "../QuestionList/QuestionList";
import { useChatContext } from "@/app/ChatContext";
import SidebarToggle from "./SidebarToggle";

const Sidebar = () => {
  const router = useRouter();
  const { isSidebarOpen, setIsSidebarOpen } = useChatContext();

  const handleOnNewChatClick = () => {
    router.push("/");
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <Col
          sm={12}
          md={2}
          className={`sidebar bg-dark ${!isSidebarOpen && "d-none"}`}
        >
          <Stack
            direction="horizontal"
            gap={2}
            className="d-none d-md-flex p-2"
          >
            <Button
              variant="outline-light"
              className="custom-button new-chat-btn mt-3"
              onClick={handleOnNewChatClick}
            >
              <BsPlus size="20px" /> &nbsp; New Chat
            </Button>
            <SidebarToggle />
          </Stack>

          <div className=" d-none d-md-flex">
            <QuestionList />
          </div>

          <SidebarMobile />
        </Col>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Sidebar;
