import { Outlet } from "react-router-dom";
import Header from "./components/Header";

interface AppLayoutProps {
  children?: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="md:max-w-5xl mx-auto min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 h-full">
        {children || <Outlet />}
      </main>
      <Header className="invisible" />
    </div>
  );
};

export default AppLayout;
