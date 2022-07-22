import React from "react";
import GridOptions from "../components/GridOptions";

const Sidebar = () => {
  return (
    <div className="w-[300px] p-8 border-r-[1px] border-gray-300 h-screen flex flex-col">
      <GridOptions />
    </div>
  );
};

export default Sidebar;
