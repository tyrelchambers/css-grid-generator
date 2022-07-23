export const createGridElem = (id: number, columnId: number) => {
  const grid = document.createElement("div");
  grid.classList.add(`grid-col-${id}`, `column-${columnId + 1}`);
  grid.innerHTML = `grid #${id}`;
  return grid;
};
