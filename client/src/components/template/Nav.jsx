import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import img1 from "../../assets/img/logocerto.png";
import { Button } from "./Button";
import "./Nav.css";

/* aqui tem a estruturação do menu (navbar)*/

class Navbar extends Component {
  state = { clicked: false };
  handlenClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
        <nav className="NavbarItems">
          <h1 className="navbar-logo">
          <a href="/#/">  <img src={img1} /> </a>
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
        </nav>
        
    );
    
  }
}

export default Navbar;
