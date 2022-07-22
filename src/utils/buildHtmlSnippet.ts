import { GridProps } from "../types";
import { createGrid } from "./createGrid";
import { createGridElem } from "./createGridElem";

export const buildHtmlSnippet = (grid: GridProps) => {
  const gridWrapper = document.createElement("section");
  gridWrapper.classList.add("grid-wrapper");
  gridWrapper.innerHTML = `<div>&lt;<span class="text-red-400">section</span> <span class="text-green-400">class="grid-wrapper"</span>&gt</div>`;
  const numOfElements = grid.columns * grid.rows;

  for (let i = 0; i < numOfElements; i++) {
    const cell = document.createElement("div");
    cell.classList.add("bg-red-300");
    // These are each child elements of the grid wrapper
    gridWrapper.innerHTML += `
      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span><span class="text-red-400">div</span> <span class="text-green-400">class="grid-col-${
          i + 1
        }"</span>&gt;</span>&lt/<span class="text-red-400">div</span>&gt
      </div>
    `;
  }

  gridWrapper.innerHTML += `<div>&lt;/<span class="text-red-400">section</span>&gt</div>`;

  return gridWrapper;
};
