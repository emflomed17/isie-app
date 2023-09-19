import React from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { BsChatLeft } from "react-icons/bs";

interface QuestionPreviewProps {
  id: string;
  title: string;
}

const QuestionPreview = ({ id, title }: QuestionPreviewProps) => {
  const params = useParams();

  return (
    <Link
      href={`/chat/${id}`}
      className={`question-overview ${params.id === id && "question-active"}`}
    >
      <BsChatLeft /> &nbsp;&nbsp;{title}
    </Link>
  );
};

export default QuestionPreview;
