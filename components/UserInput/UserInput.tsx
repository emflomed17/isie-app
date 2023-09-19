"use client";
import React, { FormEventHandler, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
  Spinner,
} from "../../lib/react-bootstrap";
import { BsSendFill } from "react-icons/bs";
import { interactWithChat } from "@/api/request";
import { useChatContext } from "@/app/ChatContext";
import { ChatCompletion, ChatType } from "@/utils/types";

const UserInput = () => {
  const [inputValue, setInputValue] = useState<string>("");
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    createChat,
    updateChat,
    chats,
    chat,
    isLoading,
    setIsLoading,
    currentQuestion,
    setCurrentQuestion,
  } = useChatContext();
  const router = useRouter();
  const params = useParams();

  const isNewChat = !params.id;

  const handleOnSubmit = async (event: any) => {
    event.preventDefault();

    if (!inputValue) return;

    setCurrentQuestion(inputValue);

    try {
      setIsLoading(true);

      setInputValue("");

      const response = await interactWithChat({
        message: inputValue,
      });

      if (isNewChat) {
        const chatId = uuidv4();
        createChat({ id: chatId, question: inputValue, response });
        setCurrentQuestion("");
        router.push(`/chat/${chatId}`);
        router.prefetch(`/chat/${chatId}`);
        return;
      }

      updateChat({
        idToUpdate: params.id as string,
        question: inputValue,
        response: response,
      });

      setCurrentQuestion("");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleOnSubmit(e);
    }
  };

  const btnVariant = inputValue ? "secondary" : "outline-secondary";

  return (
    <Container className="bottom-container">
      <Row>
        <div className="input-group input-chat px-0">
          <input
            type="text"
            placeholder="Send a message"
            className="form-input form-control"
            autoComplete="none"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
          />
          <span className="input-group-text">
            <div className="d-flex justify-content-end">
              {isLoading ? (
                <Spinner animation="grow" size="sm" className="me-2" />
              ) : (
                <Button
                  className="submit-btn me-2"
                  variant={btnVariant}
                  size="lg"
                  type="button"
                  onClick={handleOnSubmit}
                  disabled={isLoading}
                >
                  <BsSendFill size="16px" />
                </Button>
              )}
            </div>
          </span>
        </div>
        <p className="copyright-text">
          ChatGPT may produce inaccurate information about people, places, or
          facts. ChatGPT August 3 Version
        </p>
      </Row>
    </Container>
  );
};

export default UserInput;
