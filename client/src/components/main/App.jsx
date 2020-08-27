import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import Navbar from "../template/Nav"; /* menu*/
import Rodape from "../template/Footer"; /* rodape do site*/
import { HashRouter } from "react-router-dom";
import Routes from "./Routes"; /* rotas  */
export default (props) => (
  <HashRouter>
    <div className="app">
      <Navbar />
      <Routes />
      <Rodape />
    </div>
  </HashRouter>
);
