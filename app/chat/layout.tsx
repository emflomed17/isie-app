import AppGuides from "@/components/AppGuides";
import ExampleComponents from "@/components/ExampleComponents";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/styles.scss";
import Sidebar from "@/components/Sidebar/Sidebar";
import { ReactElement, ReactNode } from "react";
import { Col, Container, Row, SSRProvider } from "../../lib/react-bootstrap";
import { Roboto } from "next/font/google";
import { Metadata } from "next";

import QuickQuestions from "@/components/QuickQuestions/QuickQuestions";
import UserInput from "@/components/UserInput/UserInput";

export const metadata: Metadata = {
  title: "Chat App",
  description: "Nextjs",
};

interface ChatLayoutProps {
  children: ReactNode;
}

const ChatLayout: React.FC<ChatLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="messages-container">{children}</div>
      <div className="user-input-container">
        <UserInput />
      </div>
    </>
  );
};

export default ChatLayout;
