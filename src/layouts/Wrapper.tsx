import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const Wrapper = ({ children }: Props) => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex">
        <Sidebar />
        <section className="bg-gray-200 w-full h-screen layout-main-wrapper relative">
          <div className="main-bg absolute top-0 right-0 bottom-0 left-0"></div>

          <div className="relative z-10 h-full">{children}</div>
        </section>
      </main>
    </div>
  );
};

export default Wrapper;
