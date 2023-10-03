"use client";
import React from "react";
import { Col, Container, Image, Row } from "../../lib/react-bootstrap";

interface MessageProps {
  content: string;
  role: string;
}

const ImageConfigByRole: Record<string, Record<string, string>> = {
  user: {
    path: "/user.png",
    height: "40",
    width: "40",
  },
  assistant: {
    path: "/iwatan.png",
    height: "40",
    width: "40",
  },
};

const Message = ({ content, role }: MessageProps) => {
  return (
    <Container fluid className="chat-message-container">
      <Row className="align-items-center">
        <Col xs={2} sm={1} className="chat-icon-column">
          <Image
            src={ImageConfigByRole[role].path}
            alt="user-image"
            rounded
            height={ImageConfigByRole[role].height}
            width={ImageConfigByRole[role].width}
          />
        </Col>
        <Col xs={10} sm={11}>
          <p className={`chat-text ${role}`}>{content}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Message;
