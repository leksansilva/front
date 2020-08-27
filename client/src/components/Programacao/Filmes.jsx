import React from "react";
import Main from "../template/Main";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"; /* importacao do css bootstrap */
import Card2 from "../Programacao/Card2"; /* importação dos cards dos filmes em cartaz */
import Card3 from "../Programacao/Card3"; /* importação dos cards dos filmes em breve */
import "./Filmes.css";

export default (props) => (
  <Main icon="home" title="TopsterCine">
    <hr />
    <hr />
    <center>
      <h1>Filmes em Cartaz</h1>
    </center>
    <hr />
    <hr />
    {/* chamada do card */}
    <Card2 />
    <hr />
    <hr />
    <center>
      <h1>Filmes em Breve</h1>
    </center>
    <hr />
    <hr />
    {/* chamada do card */}
    <Card3 />
    <hr />
  </Main>
);
