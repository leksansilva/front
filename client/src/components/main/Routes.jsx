import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Home from "../Home/Home";
import UserCrud from "../User/UserCrud";
import Login from "../Login/login";
import Produtos from "../Produtos/produto";
import Filmes from "../Programacao/Filmes";

/* importações de rotas*/
import Home from "../Home/Home";
import UserCrud from "../User/UserCrud";
import Login from "../Login/login";
import Produtos from "../Produtos/produto";
import Filmes from "../Programacao/Filmes";

export default (props) => (
  <Switch>
    {/* classe para chamar as paginas*/}
    {/* rota do inicio ou home */}
    <Route exact path="/" component={Home} />
    {/* rota do cadastro */}
    <Route exact path="/users" component={UserCrud} />
    {/* rota do login*/}
    <Route exact path="/Login" component={Login} />
    {/* rota do produtos */}
    <Route exact path="/Produtos" component={Produtos} />
    {/* rota da tela de filmes */}
    <Route exact path="/Filmes" component={Filmes} />
    <Redirect from="*" to="/" />
  </Switch>
);
