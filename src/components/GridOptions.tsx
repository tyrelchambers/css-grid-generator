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

      <p className="font-bold">Grid gaps</p>
      <div className="flex flex-col">
        <label htmlFor="rows">Gap</label>
        <input
          type="number"
          name="gap"
          placeholder="Enter # of gap"
          value={grid.gap}
          onChange={(e) => grid.setGap(Number(e.target.value))}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="rows">Column Gap</label>
        <input
          type="number"
          name="columnGap"
          placeholder="Enter column gap amount"
          value={grid.columnGap}
          onChange={(e) => grid.setColumnGap(Number(e.target.value))}
          readOnly={grid.gap > 0}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="rows">Row Gap</label>
        <input
          type="number"
          name="rowGap"
          placeholder="Enter row gap amount"
          value={grid.rowGap}
          onChange={(e) => grid.setRowGap(Number(e.target.value))}
          readOnly={grid.gap > 0}
        />
      </div>
    </>
  );
};

export default GridOptions;
