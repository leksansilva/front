import React from "react";
import Main from "../template/Main"; /* importaçao do menu */
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"; /* importaçao do bootstrap */
import Produto_card from "./Cards"; /* importação dos cards */
const headerProps = {};

export default (props) => (
  <Main icon="home" title="TopsterCine" {...headerProps}>
    {/* menu com titulo */}
    <hr />
    <hr />
    <center>
      {/*  titulo da tela */}
      <h1>Cardapio</h1>
    </center>
    <hr />
    {/* chamada dos cards */}
    <Produto_card />
  </Main>
);
