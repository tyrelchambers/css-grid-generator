import { GridProps } from "../types";
import { buildCssSnippet } from "./buildCssSnippet";
import { buildHtmlSnippet } from "./buildHtmlSnippet";
import { constructCssObject } from "./constructCssObject";
import { stylesFromCSSObj } from "./stylesFromCSSObj";

export function getHtmlAndCss(grid: GridProps) {
  const _css = constructCssObject(grid);
  const cssElems = buildCssSnippet(_css);
  const cssString = stylesFromCSSObj(_css);
  const html = buildHtmlSnippet(grid);

  return { css: cssElems, cssString, html };
}
