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

export const metadata: Metadata = {
  title: "Chat App",
  description: "Nextjs",
};

interface RootLayoutProps {
  children: ReactNode;
}

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html>
      <body className={roboto.className}>
        <>
          <Container as="main" fluid>
            <Row>
              <Sidebar />
              <Col md={6} className="main-content">
                <Header />

                <h1>Build Bootstrap with React and Next</h1>

                <ExampleComponents />

                <hr className="col-1 my-5 mx-0" />

                <AppGuides />
                <AppGuides />
                <Footer />
              </Col>
            </Row>
          </Container>
        </>
        {/* {children}
        <Link href="/about">About</Link> */}
      </body>
    </html>
  );
};

export default RootLayout;
