import create from "zustand";
import { IGridStore } from "../types";

export const useGrid = create<IGridStore>((set) => ({
  columns: 4,
  rows: 4,
  rowGap: 0,
  columnGap: 0,
  gap: 0,
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
