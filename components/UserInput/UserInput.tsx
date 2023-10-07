"use client";
import React, { FormEventHandler, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { Button, Container, Row, Spinner } from "../../lib/react-bootstrap";
import { BsSendFill } from "react-icons/bs";
import { interactWithChat } from "@/api/request";
import { useChatContext } from "@/app/ChatContext";

const UserInput = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const {
    createChat,
    updateChat,
    isLoading,
    setIsLoading,
    setCurrentQuestion,
    setErrorMessage,
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

      const textarea = document.querySelector(
        "#textArea"
      ) as HTMLTextAreaElement;
      if (textarea) {
        textarea.style.height = "60px";
      }

      setCurrentQuestion("");
    } catch (error: any) {
      console.log(error.message);
      setErrorMessage(
        "An error has occurred in the communication with the API."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const textarea = e.target as HTMLTextAreaElement;
    if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault();
      textarea.value += "\n";
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
      return;
    }
    if (e.key === "Enter") {
      e.preventDefault();
      handleOnSubmit(e);
      textarea.style.height = "60px";
    }
  };

  return (
    <Container className="bottom-container">
      <Row>
        <div className="input-group input-chat px-0">
          <textarea
            id="textArea"
            placeholder="Send a message"
            className="form-input form-control"
            autoComplete="none"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            rows={1}
          />
          <span className="input-group-text">
            <div className="d-flex justify-content-end">
              {isLoading ? (
                <Spinner animation="grow" size="sm" className="me-2" />
              ) : (
                <Button
                  className={`submit-btn me-2 ${inputValue && "active"}`}
                  variant="outline-secondary"
                  size="lg"
                  type="button"
                  onClick={handleOnSubmit}
                  disabled={isLoading || !inputValue}
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
