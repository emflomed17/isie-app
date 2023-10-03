import { ReactNode } from "react";
import { Metadata } from "next";

import QuickQuestions from "@/components/QuickQuestions/QuickQuestions";
import UserInput from "@/components/UserInput/UserInput";
import ChatHeader from "@/components/ChatHeader/ChatHeader";
import UserInputWrapper from "@/components/UserInput/UserInputWrapper";

export const metadata: Metadata = {
  title: "Chat App",
  description: "Nextjs",
};

interface ChatLayoutProps {
  children: ReactNode;
}

const ChatLayout: React.FC<ChatLayoutProps> = ({ children }) => {
  return (
    <>
      <ChatHeader />
      <div className="messages-container">{children}</div>
      <UserInputWrapper>
        <UserInput />
      </UserInputWrapper>
    </>
  );
};

export default ChatLayout;
