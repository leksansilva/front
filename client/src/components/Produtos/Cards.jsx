import React, { Component } from "react";
import Produto_card from "../Produtos/produto_card";
import img1 from "../../assets/img/Combo.jpg";
import img2 from "../../assets/img/pipoca.jpg";
import img3 from "../../assets/img/refrigerante.jpg";
class Card extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Produto_card imgsrc={img1} title="Combo" />
          </div>
          <div className="col-md-4">
            <Produto_card imgsrc={img2} title="Pipoca" />
          </div>
          <div className="col-md-4">
            <Produto_card imgsrc={img3} title="Refrigerante" />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
