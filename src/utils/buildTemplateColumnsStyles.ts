import { GridProps } from "../types";

export const buildTemplateColumnsStyles = (columnWidth: any[]) => {
  const _columns = Object.values(columnWidth);
  const styles = [];

  for (let index = 0; index < _columns.length; index++) {
    const element = _columns[index];
    styles.push(`${element.value}${element.unit}`);
  }

  return styles;
};
