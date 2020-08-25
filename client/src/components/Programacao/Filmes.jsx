import React from "react";
import Main from "../template/Main";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card2 from "../Programacao/Card2";
import Card3 from "../Programacao/Card3";
import "./Filmes.css";

export default (props) => (
  <Main icon="home" title="TopsterCine">
    <Card2 />
    <div className="mb-0">
      <h2>Em breve</h2>
    </div>

    <Card3 />
    <hr />
  </Main>
);
