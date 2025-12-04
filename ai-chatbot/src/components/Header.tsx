import { ArrowDown01Icon, MessageDelay02Icon } from "hugeicons-react";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header
      className={`px-2 md:px-4 py-3 flex items-center justify-between ${className}`}
    >
      <div className="flex items-center gap-1 py-1.5 px-3 rounded-lg hover:bg-gray-600/40 transition-all duration-100 cursor-pointer">
        <span className="text-lg font-medium">Datrex</span>
        <ArrowDown01Icon size={16} />
      </div>
      <div className="size-10 flex items-center justify-center transition-all duration-100 p-1 hover:bg-gray-600/50 rounded-full">
        <MessageDelay02Icon
          size={22}
          strokeWidth={2}
          className="cursor-pointer"
          color="#ddd"
        />
      </div>
    </header>
  );
};

export default Header;
