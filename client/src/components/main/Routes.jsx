import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Home from "../Home/Home"; /*rota que leva para o inicio ou home do site */
import UserCrud from "../User/UserCrud"; /* rota para tela de cadastro */
import Login from "../Login/login"; /* rota para tela de login */
import Produtos from "../Produtos/produto"; /* rota para tela de produtos ou cardapio */
import Filmes from "../Programacao/Filmes"; /* rota para tela de cartalogos de filmes */

export default (props) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/users" component={UserCrud} />
    <Route exact path="/Login" component={Login} />
    <Route exact path="/Produtos" component={Produtos} />
    <Route exact path="/Filmes" component={Filmes} />
    <Redirect from="*" to="/" />
  </Switch>
);
