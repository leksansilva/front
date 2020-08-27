import React from "react";
import { Switch, Route, Redirect } from "react-router";

/* importações de rotas*/
import Home from "../Home/Home";
import UserCrud from "../User/UserCrud";
import Login from "../Login/login";
import Produtos from "../Produtos/produto";
import Filmes from "../Programacao/Filmes";

export default (props) => (

  /* classe para chamar as paginas*/
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path= "/users" component={UserCrud}/>
    <Route exact path="/Login" component={Login} />
    <Route exact path="/Produtos" component={Produtos} />
    <Route exact path="/Filmes" component={Filmes} />
    <Redirect from="*" to="/" />
  </Switch>
);
