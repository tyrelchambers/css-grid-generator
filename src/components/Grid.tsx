import React, { useEffect } from "react";
import { GridProps } from "../types";
import { createCss } from "../utils/createCss";
import { createGrid } from "../utils/createGrid";

const Grid = (grid: GridProps) => {
  useEffect(() => {
    createGrid(grid);
    createCss(grid);
  }, [grid]);

  return (
    <div className="p-6 h-full">
      <section
        className="grid-wrapper border-gray-400 border-2 shadow-xl"
        id="grid-wrapper"
      ></section>
    </div>
  );
};

export default Grid;
