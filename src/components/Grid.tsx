import React, { useEffect } from "react";
import { GridProps } from "../types";
import { createCss } from "../utils/createCss";
import { createGrid } from "../utils/createGrid";

const Grid = (grid: GridProps) => {
  useEffect(() => {
    createGrid(grid);
    createCss(grid);
  }, [grid]);

  return <section className="grid-wrapper" id="grid-wrapper"></section>;
};

export default Grid;
