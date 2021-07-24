import type { Component } from "solid-js";

import Center from "./layout/Center";
import Square from "./layout/Square";
import Quarter from "./layout/Quarter";

const App: Component = () => {
  return (
    <Center>
      <Square>
        <Quarter vertical={'top'} horizontal={'left'}></Quarter>
        <Quarter vertical={'top'} horizontal={'right'}></Quarter>
        <Quarter vertical={'bottom'} horizontal={'left'}></Quarter>
        <Quarter vertical={'bottom'} horizontal={'right'}></Quarter>
      </Square>
    </Center>
  );
};

export default App;
