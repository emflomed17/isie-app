import React from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { BsChatLeft } from "react-icons/bs";

interface QuestionPreviewProps {
  id: string;
  title: string;
  onClick?: () => void;
}

const QuestionPreview = ({
  id,
  title,
  onClick = () => null,
}: QuestionPreviewProps) => {
  const params = useParams();

  return (
    <Link
      href={`/chat/${id}`}
      className={`question-overview ${params.id === id && "question-active"}`}
      onClick={onClick}
    >
      <BsChatLeft /> &nbsp;&nbsp;{title}
    </Link>
  );
};

export default QuestionPreview;
