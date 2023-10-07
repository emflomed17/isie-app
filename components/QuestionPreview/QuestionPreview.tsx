import React, { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { BsChatLeft, BsTrash } from "react-icons/bs";
import { useChatContext } from "@/app/ChatContext";
import DecisionModal from "../DecisionModal/DecisionModal";

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
  const { deleteChat } = useChatContext();
  const params = useParams();
  const router = useRouter();
  const isActive = params.id === id;

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => setIsModalOpen(true);

  const handleOnDelete = () => {
    router.push("/");
    setIsModalOpen(false);
    setTimeout(() => {
      deleteChat(id);
      onClick && onClick();
    }, 1000);
  };

  return (
    <>
      <div className="d-none d-md-flex">
        <DecisionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleOnDelete}
        />
      </div>
      <div className={`question-overview ${isActive && "question-active"}`}>
        <Link href={`/chat/${id}`} className="question-link" onClick={onClick}>
          <div className="link-inner-container">
            <div>
              <BsChatLeft /> &nbsp;&nbsp;<span>{title}</span>
            </div>
          </div>
        </Link>
        {isActive && (
          <BsTrash onClick={handleOpenModal} className="trash-icon" />
        )}
      </div>
    </>
  );
};

export default QuestionPreview;
