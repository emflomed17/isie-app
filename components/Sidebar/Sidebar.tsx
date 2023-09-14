import React, { useState } from "react";
import Link from "next/link";
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

const Sidebar = () => {
  return (
    <Col sm={12} md={2} className="sidebar bg-dark">
      <Stack direction="horizontal" gap={2} className="p-2">
        <Button
          variant="outline-light"
          className="custom-button new-chat-btn d-none d-md-flex mt-3"
        >
          <BsPlus size="20px" /> &nbsp; New Chat
        </Button>
        <Button
          variant="outline-light"
          className="custom-button d-none d-md-flex mt-3"
        >
          <BsLayoutSidebar size="20px" />
        </Button>
      </Stack>

      <QuestionList />

      <SidebarMobile />
    </Col>
  );
};

export default Sidebar;
