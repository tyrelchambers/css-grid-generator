import React from "react";
import { useGrid } from "../stores/useGrid";
import { GridProps } from "../types";

const ColumnHeader = () => {
  return (
    <div className="py-2">
      <input
        type="text"
        placeholder="0"
        className="bg-white border-2 border-gray-300 p-2 w-[100px] rounded-md"
      />
    </div>
  );
};

export default ColumnHeader;
