import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Button } from "./Button";
import "./Nav.css";

class Navbar extends Component {
  state = { clicked: false };
  handlenClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
        <nav className="NavbarItems">
          <h1 className="navbar-logo">
            TopsterCine<i className="fab fa-react"></i>
          </h1>
          <div className="menu-icon" onClick={this.handlenClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <input type="checkbox" id="check"></input>
          <label for="check">
            <i id="btn" class="btn btn-sucess">Login</i>
            <i  id="cancel" class="btn btn-primary">cancelar</i>
          </label>
          <label>
            <div id="login_form">
              <h1>Login</h1>
              <ul id="login_list">
                <li><input class="txt" type="text" placeholder="Usuário"></input></li>
                <li><input class="txt" type="password" placeholder="Senha"></input></li>
                <li><input class="button" type="button" value="Login"/></li>
                <a href="#">Registre-se</a><br></br>
                <a href="#">Esqueci a Senha</a>
              </ul>
            </div>
          </label>
        </nav>
        
    );
    
  }
}

export default Navbar;
