import React from "react";
import { useGrid } from "../stores/useGrid";
import { validateColumnWidth } from "../utils/validateColumnWidth";

const ColumnHeader = ({ column }: { column: number }) => {
  const grid = useGrid((state) => state);
  const values = grid.columnWidth[column + 1] || { value: 1, unit: "fr" };

  return (
    <div className="py-2">
      <input
        type="text"
        placeholder="1fr"
        className="bg-white border-2 border-gray-300 p-2 w-[100px] rounded-md"
        onChange={async (e) => {
          const col = await validateColumnWidth(e.target.value);

          if (col) {
            grid.setColumnWidth({
              unit: col.unit,
              value: Number(col.value),
              column: column + 1,
            });
          }
        }}
      />
      {/* {console.log(grid.columnWidth)} */}
    </div>
  );
};

export default ColumnHeader;
