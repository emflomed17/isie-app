import "@/styles/styles.scss";
import Sidebar from "@/components/Sidebar/Sidebar";
import { ReactNode } from "react";
import { Col, Container, Row } from "../lib/react-bootstrap";
import { Raleway } from "next/font/google";
import { Metadata } from "next";

import { ChatProvider } from "./ChatContext";
import ErrorToast from "@/components/ErrorToast/ErrorToast";
import SidebarToggle from "@/components/Sidebar/SidebarToggle";

export const metadata: Metadata = {
  title: "Chat App",
  description: "Nextjs",
};

interface RootLayoutProps {
  children: ReactNode;
}

const roboto = Raleway({
  weight: ["100", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html>
      <body className={roboto.className}>
        <>
          <ChatProvider>
            <ErrorToast />
            <Container as="main" fluid>
              <Row>
                <div className="sidebar-toggle-container">
                  <SidebarToggle />
                </div>
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
