import React from "react";
import { Col, Container, Image, Row } from "../../lib/react-bootstrap";

interface MessageProps {
  content: string;
  role: string;
}

const Message = ({ content, role }: MessageProps) => {
  return (
    <Container fluid className="chat-message-container">
      <Row>
        <Col xs={2} sm={1}>
          <Image src="https://placehold.co/40" alt="user-image" rounded />
        </Col>
        <Col xs={10} sm={11}>
          <p className="chat-text">
            {content}
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            temporibus voluptate magni dolore cupiditate, adipisci inventore
            tempora ut quos iste at aliquam culpa, sit quam reprehenderit alias
            eos ipsa similique cumque sunt? Sint natus corporis aliquam a dolore
            sed rerum repudiandae reprehenderit nam. Explicabo voluptatum
            excepturi laborum possimus nihil accusamus. */}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Message;
