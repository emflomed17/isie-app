import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  Row,
  Stack,
} from "../../lib/react-bootstrap";
import { BsPlus } from "react-icons/bs";

const Question = () => {
  return (
    <Col md={6} className="pb-3">
      <div className="quick-question">
        Question Here <br />
        <span className="sub-item">Lorem ipsum dolor sit amet.</span>
      </div>
    </Col>
  );
};

const QuickQuestions = () => {
  return (
    <Container className="bottom-container">
      <Row>
        <Col md={6} className="pb-3">
          <div className="quick-question">
            Question Here <br />
            <span className="sub-item">Lorem ipsum dolor sit amet.</span>
          </div>
        </Col>
        <Col md={6} className="pb-3">
          <div className="quick-question">
            Question Here <br />
            <span className="sub-item">Lorem ipsum dolor sit amet.</span>
          </div>
        </Col>
        <Col md={6} className="pb-3">
          <div className="quick-question">
            Question Here <br />
            <span className="sub-item">Lorem ipsum dolor sit amet.</span>
          </div>
        </Col>
        <Col md={6} className="pb-3">
          <div className="quick-question">
            Question Here <br />
            <span className="sub-item">Lorem ipsum dolor sit amet.</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default QuickQuestions;
