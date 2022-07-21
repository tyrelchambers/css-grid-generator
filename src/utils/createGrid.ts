import { GridProps } from "../types";
import { createGridElem } from "./createGridElem";

export const createGrid = ({ columns, rows }: GridProps) => {
  const gridWrapper = document.querySelector("#grid-wrapper");
  gridWrapper.innerHTML = "";

  for (let rowsIndex = 0; rowsIndex < rows; rowsIndex++) {
    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
      gridWrapper?.append(createGridElem(columnIndex + rowsIndex + 1));
    }
  }

  return gridWrapper;
};
