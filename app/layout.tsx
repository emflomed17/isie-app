"use client";
import AppGuides from "@/components/AppGuides";
import ExampleComponents from "@/components/ExampleComponents";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/styles.scss";
import Sidebar from "@/components/Sidebar/Sidebar";
import { ReactElement, ReactNode } from "react";
import { Col, Container, Row, SSRProvider } from "../lib/react-bootstrap";
import { Roboto } from "next/font/google";
import { Metadata } from "next";

import QuickQuestions from "@/components/QuickQuestions/QuickQuestions";
import UserInput from "@/components/UserInput/UserInput";
import Message from "@/components/Message/Message";
import MessageList from "@/components/MessageList/MessageList";
import { ChatProvider } from "./ChatContext";

// export const metadata: Metadata = {
//   title: "Chat App",
//   description: "Nextjs",
// };

interface RootLayoutProps {
  children: ReactNode;
}

// const roboto = Roboto({
//   weight: ["300", "400", "500", "700"],
//   style: ["italic", "normal"],
//   subsets: ["latin"],
// });

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html>
      <body>
        <>
          <ChatProvider>
            <Container as="main" fluid>
              <Row>
                <Sidebar />
                <Col sm={12} md className="main-container px-0">
                  {children}
                </Col>
              </Row>
            </Container>
          </ChatProvider>
        </>
      </body>
    </html>
  );
};

export default RootLayout;
