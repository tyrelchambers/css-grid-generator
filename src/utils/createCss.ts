import { GridProps } from "../types";

export const createCss = ({ columns, rows }: GridProps) => {
  const css = `
#grid-wrapper {
  display: grid;
  grid-template-columns: repeat(${columns}, 1fr);
  grid-template-rows: repeat(${rows}, 1fr);
}
  `;

  const style = document.createElement("style");
  style.innerHTML = css;
  document.head.append(style);
};
