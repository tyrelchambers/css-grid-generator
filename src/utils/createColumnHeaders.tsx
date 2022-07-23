import ColumnHeader from "../components/ColumnHeader";
import { GridProps } from "../types";

export const createColumnHeaders = (columns: GridProps["columns"]) => {
  const elements = [];

  for (let index = 0; index < columns; index++) {
    elements.push(<ColumnHeader key={index} />);
  }

  return elements;
};
