import type { Component } from "solid-js";

import Center from "./layout/Center";
import Square from "./layout/Square";

const App: Component = () => {
  return (
    <Center>
      <Square>
        <code>we are the robots</code>
      </Square>
    </Center>
  );
};

export default App;
