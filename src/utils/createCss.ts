import { GridProps } from "../types";
import { constructCssObject } from "./constructCssObject";
import { stylesFromCSSObj } from "./stylesFromCSSObj";

export const createCss = (grid: GridProps) => {
  const _css = constructCssObject(grid);
  const style = document.createElement("style");
  style.innerHTML = stylesFromCSSObj(_css);
  document.head.append(style);
};
