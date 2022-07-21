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

        <section className="bg-gray-50 w-full h-screen">{children}</section>
      </main>
    </div>
  );
};

export default Wrapper;
