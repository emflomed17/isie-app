"use client";
import { useChatContext } from "@/app/ChatContext";
import React from "react";
import { Button } from "react-bootstrap";
import { BsLayoutSidebar } from "react-icons/bs";

const SidebarToggle = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useChatContext();
  return (
    <Button
      variant="outline-light"
      className="custom-button d-none d-md-flex mt-3"
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    >
      <BsLayoutSidebar size="20px" />
    </Button>
  );
};

export default SidebarToggle;
