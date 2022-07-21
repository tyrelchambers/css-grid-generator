export const createGridElem = (id: number) => {
  const grid = document.createElement("div");
  grid.classList.add(`grid-col-${id}`);
  grid.innerHTML = `grid #${id}`;
  return grid;
};
