"use client";
import { useChatContext } from "@/app/ChatContext";
import React from "react";

interface UserInputWrapper {
  children: React.ReactNode;
}

const UserInputWrapper = ({ children }: UserInputWrapper) => {
  const { isSidebarOpen } = useChatContext();
  return (
    <div className={`user-input-container ${!isSidebarOpen && "expanded"}`}>
      {children}
    </div>
  );
};

export default UserInputWrapper;
