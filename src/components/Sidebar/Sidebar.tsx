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

const Sidebar = () => {
  return (
    <Col md={6} className="sidebar bg-dark">
      <Stack direction="horizontal" gap={2}>
        <Button
          variant="outline-light"
          className="custom-button new-chat-btn d-none d-md-flex mt-3"
        >
          <i className="fa fa-plus mt-1"></i>&nbsp; New Chat
        </Button>
        <Button
          variant="outline-light"
          className="custom-button d-none d-md-flex mt-3 p-2"
        >
          <i className="fa fa-plus mt-1 "></i>
        </Button>
      </Stack>
      <Nav className="flex-column d-none d-md-flex">
        <Nav.Link href="#">Link 1</Nav.Link>
        <Nav.Link href="#">Link 2</Nav.Link>
        <Nav.Link href="#">Link 3</Nav.Link>
      </Nav>

      <SidebarMobile />
    </Col>
  );
};

export default Sidebar;
