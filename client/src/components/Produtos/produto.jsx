import React from "react";
import Main from "../template/Main";
import Produto_card from "../Produtos/produto_card";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const headerProps = {};

export default (props) => (
  <Main icon="home" title="TopsterCine" {...headerProps}>
    <h2>Cardapio</h2>
    <Produto_card />
  </Main>
);
