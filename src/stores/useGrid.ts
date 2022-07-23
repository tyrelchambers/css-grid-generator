import create from "zustand";
import { IGridStore } from "../types";

export const useGrid = create<IGridStore>((set) => ({
  columns: 4,
  rows: 4,
  rowGap: 0,
  columnGap: 0,
  gap: 0,
  columnWidth: {
    1: {
      value: 1,
      unit: "fr",
      column: 1,
    },
    2: {
      value: 2,
      unit: "fr",
      column: 2,
    },
    3: {
      value: 2,
      unit: "fr",
      column: 3,
    },
    4: {
      value: 3,
      unit: "fr",
      column: 4,
    },
  },
  setColumnWidth: (columnWidth) =>
    set((state) => ({
      ...state,
      columnWidth: {
        ...state.columnWidth,
        [columnWidth.column]: columnWidth,
      },
    })),
  setColumns: (columns) => set((state) => ({ ...state, columns })),
  setRows: (rows) => set((state) => ({ ...state, rows })),
  setRowGap: (rowGap) => set((state) => ({ ...state, rowGap })),
  setColumnGap: (columnGap) => set((state) => ({ ...state, columnGap })),
  setGap: (gap) => set((state) => ({ ...state, gap })),
  reset: () =>
    set((state) => ({
      ...state,
      columns: 4,
      rows: 4,
      rowGap: 0,
      columnGap: 0,
      gap: 0,
    })),
}));
