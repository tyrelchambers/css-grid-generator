import React, { useEffect } from "react";
import { GridProps } from "../types";
import { createCss } from "../utils/createCss";
import { createGrid } from "../utils/createGrid";

const Grid = ({ columns, rows }: GridProps) => {
  useEffect(() => {
    createGrid({ columns, rows });
    createCss({ columns, rows });
  }, [columns, rows]);

  return <section className="grid-wrapper" id="grid-wrapper"></section>;
};

export default Grid;
