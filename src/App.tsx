import type { Component } from "solid-js";

import Center from "./layout/Center";
import Square from "./layout/Square";

const App: Component = () => {
  return (
    <Center>
      <Square>
        Perfectly Balanced
      </Square>
    </Center>
  );
};

export default App;
