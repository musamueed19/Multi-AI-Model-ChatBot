import type { ChatMessage, ChatMessagesProps } from "./types";
import UserPromptField from "./UserPromptField";

const Chat = ({ messages }: ChatMessagesProps) => {
  return (
    <div className="px-1 flex-1 flex flex-col items-center justify-between">
      <div className="w-full">
        {messages?.map((message: ChatMessage, index: number) => (
          <div key={index}>
            {message.role === "user" ? (
              <div className="flex justify-end mb-8">
                <div className="bg-gray-600/40 rounded-full px-5 py-2">
                  {message.content}
                </div>
              </div>
            ) : (
              <div
                className={`flex justify-start ${
                  messages[index + 1]?.role === "assistant" ? "mb-1" : "mb-8"
                }`}
              >
                <div>{message.content}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <UserPromptField />
    </div>
  );
};

export default Chat;
