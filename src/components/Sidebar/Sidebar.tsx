import React, { useState } from "react";
import Link from "next/link";
import Col from "react-bootstrap/Col";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  Row,
  Stack,
} from "react-bootstrap";
import SidebarMobile from "./SidebarMobile";
import QuestionPreview from "../QuestionPreview/QuestionPreview";
import QuestionList from "../QuestionList/QuestionList";

const Sidebar = () => {
  return (
    <Col md={6} className="sidebar bg-dark">
      <Stack direction="horizontal" gap={2} className="p-2">
        <Button
          variant="outline-light"
          className="custom-button new-chat-btn d-none d-md-flex mt-3"
        >
          <i className="fa fa-plus mt-1"></i>&nbsp; New Chat
        </Button>
        <Button
          variant="outline-light"
          className="custom-button d-none d-md-flex mt-3"
        >
          <i className="fa fa-plus mt-1 "></i>
        </Button>
      </Stack>

      <QuestionList />

      <SidebarMobile />
    </Col>
  );
};

export default Sidebar;
