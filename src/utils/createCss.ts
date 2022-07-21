import { GridProps } from "../types";
import { stylesFromCSSObj } from "./stylesFromCSSObj";

export const createCss = (grid: GridProps) => {
  const _css = {
    ["#grid-wrapper"]: {
      display: "grid",
      [`grid-template-columns`]: `repeat(${grid.columns}, 1fr)`,
      [`grid-template-rows`]: `repeat(${grid.rows}, 1fr)`,
    },
    ['[class*="grid-col-"]']: {
      ["background-color"]: "rebeccapurple",
      color: "white",
    },
  };

  const style = document.createElement("style");

  style.innerHTML = stylesFromCSSObj(_css);
  document.head.append(style);
};
