export interface IGridStore {
  columns: number;
  rows: number;
  rowGap: number;
  columnGap: number;
  gap: number;
  setColumns: (columns: number) => void;
  setRows: (rows: number) => void;
  setRowGap: (rowGap: number) => void;
  setColumnGap: (columnGap: number) => void;
  setGap: (gap: number) => void;
}

export type GridProps = {
  columns: number;
  rows: number;
};
