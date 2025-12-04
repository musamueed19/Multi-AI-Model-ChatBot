import { ArrowUp02Icon, Mic02Icon, Add01Icon } from "hugeicons-react";
import Chat from "../components/Chat";
import { useState } from "react";
import type { ChatMessage } from "../components/types";

const Home = () => {

  const [messages] = useState<ChatMessage[]>([
    {
      role: "user",
      content: "Can you tell me a joke?"
    },
    {
      role: "assistant",
      content: "Sure! Here's one:"
    },
    {
      role: "assistant",
      content: "Why don't scientists trust atoms? Because they make up everything!" 
    },
  ])

  return (
    <>
      {true ? (
        <div className="h-full w-full flex flex-col max-w-4xl mx-auto px-2 md:px-4">
          <Chat messages={messages} />
        </div>
      ) : (
        <div className="h-full w-full flex flex-col items-center justify-center gap-y-6 max-w-3xl mx-auto px-2 md:px-4">
          {/* What can I help with? */}
          <span className="text-2xl font-medium">
            What's in your mind today?
          </span>
          <div className="flex items-center justify-between w-full bg-[#303030] rounded-full px-6 h-[58px]">
              <div className="flex items-center gap-2.5 w-full">
                <div className="h-8 w-9 flex items-center justify-center hover:bg-gray-600/60 rounded-full transition-all duration-200">

              <Add01Icon size={22} strokeWidth={2} className="text-gray-200 cursor-pointer" />
                </div>
              <input
                type="text"
                className="outline-none w-full bg-transparent"
                placeholder="Ask anything"
              />
            </div>

            <div className="flex items-center gap-1.5 h-full ml-1">
              <Mic02Icon size={22} strokeWidth={2} className="text-gray-200" />
              <div className="bg-white rounded-full size-9 flex items-center justify-center cursor-pointer">
                <ArrowUp02Icon
                  size={20}
                  strokeWidth={2.5}
                  className="text-black"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
