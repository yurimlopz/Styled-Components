import React from "react";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlocalStyle } from "./Components/GlobalStyle";

function App() {
  return (
    <>
    <GlocalStyle/>
      <Cabecalho />
      <Container />
    </>
  );
}

export default App;
