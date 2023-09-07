import React from "react";

interface QuestionPreviewProps {
  id: string;
  title: string;
  isActive: boolean;
}

const QuestionPreview = ({ id, title, isActive }: QuestionPreviewProps) => {
  return (
    <div className="question-overview">
      <i className="fa fa-comment-o mt-1"></i>&nbsp;&nbsp;{title}
    </div>
  );
};

export default QuestionPreview;
