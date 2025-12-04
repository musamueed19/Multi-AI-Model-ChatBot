import { ArrowUp02Icon, Mic02Icon } from "hugeicons-react";

const Home = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-y-6 max-w-3xl mx-auto px-2 md:px-4">
      {/* What can I help with? */}
      <span className="text-2xl font-medium">What's in your mind today?</span>
      <div className="flex items-center justify-between w-full bg-[#303030] rounded-full px-6 h-[58px]">
        <input
          type="text"
          className="outline-none w-full bg-transparent"
          placeholder="Ask anything"
        />

        <div className="flex items-center gap-1.5 h-full ml-1">
          <Mic02Icon size={22} strokeWidth={2} className="text-gray-200" />
          <div className="bg-white rounded-full size-9 flex items-center justify-center cursor-pointer">
            <ArrowUp02Icon size={20} strokeWidth={2.5} className="text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
