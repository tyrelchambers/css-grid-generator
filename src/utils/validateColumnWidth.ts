export const validateColumnWidth = (column: string) => {
  const regex = /(?<value>[\d]+)(?<unit>fr|%|px)/;
  const groups = column.match(regex);

  console.log(groups?.groups);

  if (!groups?.groups) {
    console.log(`Invalid column width: ${column}`);
    return false;
  }

  return { value: groups?.groups.value, unit: groups?.groups.unit };
};
