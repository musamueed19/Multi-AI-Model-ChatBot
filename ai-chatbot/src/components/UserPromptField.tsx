import { Add01Icon, ArrowUp02Icon, Mic02Icon } from 'hugeicons-react';

const UserPromptField = () => {
  return (
    <div className="flex items-center justify-between w-full bg-[#303030] rounded-full px-4 md:px-6 h-[50px] md:h-[58px]">
      <div className="flex items-center gap-2.5 w-full">
        <div className="h-8 w-9 flex items-center justify-center hover:bg-gray-600/60 rounded-full transition-all duration-200">
          <Add01Icon
            size={22}
            strokeWidth={2}
            className="text-gray-200 cursor-pointer"
          />
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
          <ArrowUp02Icon size={20} strokeWidth={2.5} className="text-black" />
        </div>
      </div>
    </div>
  );
}

export default UserPromptField