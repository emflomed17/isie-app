import React from "react";
import { BsChatLeft } from "react-icons/bs";

interface QuestionPreviewProps {
  id: string;
  title: string;
  isActive: boolean;
}

const QuestionPreview = ({ id, title, isActive }: QuestionPreviewProps) => {
  return (
    <div className="question-overview">
      <BsChatLeft /> &nbsp;&nbsp;{title}
    </div>
  );
};

export default QuestionPreview;
