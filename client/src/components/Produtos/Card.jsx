import React, { Component } from "react";
import Produto_card from "../Produtos/produto_card";
import img7 from "../../assets/img/Combo.jpg";
import img8 from "../../assets/img/pipoca.jpg";
import img9 from "../../assets/img/refrigerante.jpg";

class Card extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Produto_card imgsrc={img7} />
          </div>
          <div className="col-md-4">
            <Produto_card imgsrc={img8} />
          </div>
          <div className="col-md-4">
            <Produto_card imgsrc={img9} />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
