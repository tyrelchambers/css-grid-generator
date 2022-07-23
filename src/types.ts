export interface ColumnWidth {
  value: number;
  unit: string;
  column: number;
}

export type GridProps = {
  columnWidth: {
    [key: string]: ColumnWidth;
  };
  columns: number;
  rows: number;
  rowGap: number;
  columnGap: number;
  gap: number;
};

export interface IGridStore extends GridProps {
  setColumns: (columns: number) => void;
  setRows: (rows: number) => void;
  setRowGap: (rowGap: number) => void;
  setColumnGap: (columnGap: number) => void;
  setGap: (gap: number) => void;
  reset: () => void;
  setColumnWidth: (columnWidth: ColumnWidth) => void;
}
