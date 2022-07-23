import { GridProps } from "../types";
import { buildTemplateColumnsStyles } from "./buildTemplateColumnsStyles";

export const constructCssObject = (grid: GridProps) => {
  return {
    ["#grid-wrapper"]: {
      display: "grid",
      height: "100%",
      ["max-height"]: "500px",
      [`grid-template-columns`]: buildTemplateColumnsStyles(
        grid.columnWidth
      ).join(" "),
      [`grid-template-rows`]: `repeat(${grid.rows}, 1fr)`,
      ...(grid.gap > 0
        ? {
            [`gap`]: `${grid.gap}px`,
          }
        : {
            [`grid-column-gap`]: `${grid.columnGap}px`,
            [`grid-row-gap`]: `${grid.rowGap}px`,
          }),
    },
    ['[class*="grid-col-"]']: {
      ["background-color"]: "rebeccapurple",
      color: "white",
    },
  };
};
