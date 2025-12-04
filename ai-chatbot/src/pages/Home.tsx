import Chat from "../components/Chat";
import { useState } from "react";
import type { ChatMessage } from "../components/types";
import UserPromptField from "../components/UserPromptField";

const Home = () => {
  const [messages] = useState<ChatMessage[]>([
    {
      role: "user",
      content: "Can you tell me a joke?",
    },
    {
      role: "assistant",
      content: "Sure! Here's one:",
    },
    {
      role: "assistant",
      content:
        "Why don't scientists trust atoms? Because they make up everything!",
    },
  ]);

  return (
    <>
      {true ? (
        <div className="flex-1 w-full flex flex-col max-w-4xl mx-auto px-2 md:px-4">
          <Chat messages={messages} />
        </div>
      ) : (
        <div className="h-full w-full flex flex-col items-center justify-center gap-y-6 max-w-3xl mx-auto px-2 md:px-4">
          {/* What can I help with? */}
          <span className="text-2xl font-medium">
            What's in your mind today?
          </span>

          {/* Input Field */}
          <UserPromptField />
        </div>
      )}
    </>
  );
};

export default Home;
