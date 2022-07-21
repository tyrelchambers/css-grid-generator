import React from "react";
import { useGrid } from "../stores/useGrid";

const GridOptions = () => {
  const grid = useGrid((state) => state);
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="columns">Columns</label>
        <input
          type="number"
          name="columns"
          placeholder="Enter # of columns"
          value={grid.columns}
          onChange={(e) => grid.setColumns(Number(e.target.value))}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="rows">Rows</label>
        <input
          type="number"
          name="rows"
          placeholder="Enter # of rows"
          value={grid.rows}
          onChange={(e) => grid.setRows(Number(e.target.value))}
        />
      </div>
    </>
  );
};

export default GridOptions;
