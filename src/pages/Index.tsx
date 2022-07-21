import React from "react";
import Grid from "../components/Grid";
import Wrapper from "../layouts/Wrapper";
import { useGrid } from "../stores/useGrid";

const Index = () => {
  const grid = useGrid((state) => state);
  return (
    <Wrapper>
      <Grid columns={grid.columns} rows={grid.rows} />
    </Wrapper>
  );
};

export default Index;
