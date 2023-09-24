import React from "react";
import { Nav } from "../../lib/react-bootstrap";
import QuestionPreview from "../QuestionPreview/QuestionPreview";
import { useChatContext } from "@/app/ChatContext";

interface QuestionListProps {
  onItemClick?: () => void;
}

const QuestionList = ({ onItemClick = () => null }: QuestionListProps) => {
  const { chats } = useChatContext();
  return (
    <Nav className="questions-container flex-column mt-2">
      <p className="sub-item">Last Questions</p>

      {chats &&
        chats.map((item) => {
          const titleOverview = item.title.slice(0, 30);
          return (
            <QuestionPreview
              key={item.id}
              id={item.id}
              title={titleOverview}
              onClick={onItemClick}
            />
          );
        })}
    </Nav>
  );
};

export default QuestionList;
