import { Code } from "@mantine/core";
import React from "react";
import { useGrid } from "../stores/useGrid";
import { copyToClipboard } from "../utils/copyToClipboard";
import { getHtmlAndCss } from "../utils/getHtmlAndCss";

const HtmlExport = () => {
  const grid = useGrid((state) => state);
  const { html } = getHtmlAndCss(grid);
  const gridMain = document.getElementById("grid-wrapper");
  return (
    <>
      <div
        className="bg-gray-900 text-white p-4 rounded-xl"
        dangerouslySetInnerHTML={{ __html: html.outerHTML }}
      ></div>
      <div className="flex justify-end">
        <button
          type="button"
          className="bg-blue-600 py-2 px-4 rounded-md text-white font-semibold text-sm mt-4"
          onClick={() => copyToClipboard(gridMain?.outerHTML)}
        >
          Copy HTML
        </button>
      </div>
    </>
  );
};

export default HtmlExport;
