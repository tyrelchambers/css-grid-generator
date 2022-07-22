import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Tooltip } from "@mantine/core";
import React, { useState } from "react";
import { useGrid } from "../stores/useGrid";
import Label from "./Label";

const GridOptions = () => {
  const grid = useGrid((state) => state);
  const [opened, setOpened] = useState(true);

  const inputClasses = `w-full p-2 border-[1px] border-gray-300 rounded-md mt-2`;
  const disabledClasses = `${inputClasses} bg-gray-300 text-gray-500 cursor-not-allowed`;
  return (
    <>
      <div className="flex flex-col gap-4">
        <p className="font-semibold text-gray-800">Grid size</p>
        <div className="flex flex-col">
          <Label htmlFor="columns">Columns</Label>
          <input
            type="number"
            name="columns"
            placeholder="Enter # of columns"
            value={grid.columns}
            onChange={(e) => grid.setColumns(Number(e.target.value))}
            className={inputClasses}
          />
        </div>

        <div className="flex flex-col">
          <Label htmlFor="rows">Rows</Label>
          <input
            type="number"
            name="rows"
            placeholder="Enter # of rows"
            value={grid.rows}
            onChange={(e) => grid.setRows(Number(e.target.value))}
            className={inputClasses}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-6">
        <p className="font-bold text-gray-800 flex items-center gap-4">
          Grid gaps{" "}
          <Tooltip
            width={200}
            label="Gap and Column/Row gap must be used separately. If gap has a value greater than 0, the other inputs will be disabled."
            withArrow
            wrapLines
            placement="center"
            position="left"
            transition="fade"
            transitionDuration={200}
          >
            <FontAwesomeIcon
              className="text-blue-400 text-sm"
              icon={faInfoCircle}
            />
          </Tooltip>
        </p>
        <div className="flex flex-col">
          <Label htmlFor="rows">Gap</Label>
          <input
            type="number"
            name="gap"
            placeholder="Enter # of gap"
            value={grid.gap}
            onChange={(e) => grid.setGap(Number(e.target.value))}
            className={
              grid.columnGap || grid.rowGap > 0 ? disabledClasses : inputClasses
            }
            readOnly={(grid.columnGap || grid.rowGap) > 0}
          />
        </div>

        <div className="flex flex-col">
          <Label htmlFor="rows">Column Gap</Label>
          <input
            type="number"
            name="columnGap"
            placeholder="Enter column gap amount"
            value={grid.columnGap}
            onChange={(e) => grid.setColumnGap(Number(e.target.value))}
            className={grid.gap > 0 ? disabledClasses : inputClasses}
            readOnly={grid.gap > 0}
          />
        </div>

        <div className="flex flex-col">
          <Label htmlFor="rows">Row Gap</Label>
          <input
            type="number"
            name="rowGap"
            placeholder="Enter row gap amount"
            value={grid.rowGap}
            onChange={(e) => grid.setRowGap(Number(e.target.value))}
            className={grid.gap > 0 ? disabledClasses : inputClasses}
            readOnly={grid.gap > 0}
          />
        </div>
      </div>
      <button
        type="button"
        className="w-full py-2 px-4 hover:bg-red-500 border-2 border-red-500 transition-all shadow-lg rounded-full mt-6 hover:text-white text-red-500 font-semibold"
        onClick={grid.reset}
      >
        Reset
      </button>
    </>
  );
};

export default GridOptions;
