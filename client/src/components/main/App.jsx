
/* Importes necessario para o app,js rodar, contem chamada para as rotas. */
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import Navbar from "../template/Nav";
import Rodape from "../template/Footer";
import { HashRouter } from "react-router-dom";
import Routes from "./Routes";
export default (props) => (
 /* menu, rotas e rodapé*/
 <HashRouter>
    <div className="app">
      <Navbar />
      <Routes />
      <Rodape />
      
      
    </div>
  </HashRouter>
);
