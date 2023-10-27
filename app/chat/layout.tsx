import { ReactNode, useEffect, useRef } from "react";
import { Metadata } from "next";

import UserInput from "@/components/UserInput/UserInput";
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
      {children}
      <UserInputWrapper>
        <UserInput />
      </UserInputWrapper>
    </>
  );
};

export default ChatLayout;
