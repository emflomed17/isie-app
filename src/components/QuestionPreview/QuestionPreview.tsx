import React from "react";
import { Nav } from "react-bootstrap";

interface QuestionPreviewProps {
  id: string;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const QuestionPreview = ({
  id,
  title,
  isActive,
  onClick,
}: QuestionPreviewProps) => {
  return (
    <div className="question-overview" onClick={onClick}>
      <i className="fa fa-comment-o mt-1"></i>&nbsp;&nbsp;{title}
    </div>
  );
};

export default QuestionPreview;
