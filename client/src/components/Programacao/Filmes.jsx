import React from "react";
import Main from "../template/Main";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card2 from "../Programacao/Card2";
import Card3 from "../Programacao/Card3";
import "./Filmes.css";

export default (props) => (
  <Main icon="home" title="TopsterCine">
    
    <hr />
    <hr />
    <center><h1>Filmes em Cartaz</h1></center>
    <hr />
    <hr />
    <Card2 />
      <hr />
    <hr />
    <center><h1>Filmes em Breve</h1></center>
    <hr />
    <hr />
    <Card3 />
    <hr />
  </Main>
);
