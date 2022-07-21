import React from "react";
import { useGrid } from "../stores/useGrid";
import { copyToClipboard } from "../utils/copyToClipboard";
import { getHtmlAndCss } from "../utils/getHtmlAndCss";

const CssExport = () => {
  const grid = useGrid((state) => state);
  const { css, cssString } = getHtmlAndCss(grid);

  return (
    <div>
      <div
        className="bg-gray-100 p-4 rounded-xl"
        dangerouslySetInnerHTML={{ __html: css.innerHTML }}
      ></div>
      <div className="flex justify-end">
        <button
          type="button"
          className="bg-blue-600 py-2 px-4 rounded-md text-white font-semibold text-sm mt-4"
          onClick={() => copyToClipboard(cssString)}
        >
          Copy CSS
        </button>
      </div>
    </div>
  );
};

export default CssExport;
