import React from "react";
import Main from "../template/Main";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Produto_card from "./Cards";
const headerProps = {};

export default (props) => (
  <Main icon="home" title="TopsterCine" {...headerProps}>
    <hr />
    <hr />
    <center>
      <h1>Cardapio</h1>
    </center>
    <hr />
    <Produto_card />
  </Main>
);
