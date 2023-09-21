"use client";
import { useChatContext } from "@/app/ChatContext";
import MessageList from "@/components/MessageList/MessageList";

export default function Chat({ params }: { params: { id: string } }) {
  const { chats } = useChatContext();
  const currentChat = chats.filter((item) => item.id === params.id);
  const messages =
    currentChat.length > 0
      ? currentChat[0].messages
      : [{ role: "system", content: "" }];

  const isValidChat = currentChat.length > 0;

  return (
    <div>
      <MessageList messages={messages} isValidChat={isValidChat} />
    </div>
  );
}
