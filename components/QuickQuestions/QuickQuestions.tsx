"use client";
import React from "react";
import { Col, Container, Row } from "../../lib/react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { useChatContext } from "@/app/ChatContext";
import { interactWithChat } from "@/api/request";

const questions = [
  {
    id: 1,
    title: "What is the capital",
    subtitle: "of Sweden",
  },
  {
    id: 2,
    title: "What is the capital",
    subtitle: "of Russia",
  },
  {
    id: 3,
    title: "What is the capital",
    subtitle: " of Japan",
  },
  {
    id: 4,
    title: "What is the capital",
    subtitle: "of Argentina",
  },
];

interface QuestionProps {
  title: string;
  subtitle: string;
}

const Question = ({ title, subtitle }: QuestionProps) => {
  const router = useRouter();
  const { createChat, setIsLoading, setCurrentQuestion, setErrorMessage } =
    useChatContext();

  const questionText = `${title} ${subtitle}`;

  const handleOnClick = async () => {
    try {
      setIsLoading(true);

      const response = await interactWithChat({
        message: questionText,
      });
      const chatId = uuidv4();
      createChat({ id: chatId, question: questionText, response });
      setCurrentQuestion("");
      router.push(`/chat/${chatId}`);
    } catch (error: any) {
      console.error(error);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Col md={6} className="pb-3" onClick={() => handleOnClick()}>
      <div className="quick-question">
        {title} <br />
        <span className="sub-item">{subtitle}</span>
      </div>
    </Col>
  );
};

const QuickQuestions = () => {
  return (
    <Container className="bottom-container">
      <Row>
        {questions.map((item) => (
          <Question key={item.id} title={item.title} subtitle={item.subtitle} />
        ))}
      </Row>
    </Container>
  );
};

export default QuickQuestions;
