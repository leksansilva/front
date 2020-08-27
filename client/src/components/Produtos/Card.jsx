import React, { Component } from "react";
import Produto_card from "../Produtos/produto_card"; /* importação do formato do card */
import img7 from "../../assets/img/Combo.jpg"; /* importação da imagem combo */
import img8 from "../../assets/img/pipoca.jpg"; /* importação da imagem pipoca */
import img9 from "../../assets/img/refrigerante.jpg"; /* importação da imagem refrigerante*/

class Card extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            {/*aqui foi  recebido a imagem do combo */}
            <Produto_card imgsrc={img7} />
          </div>
          <div className="col-md-4">
            {/*aqui foi  recebido a imagem da pipoca */}
            <Produto_card imgsrc={img8} />
          </div>
          <div className="col-md-4">
            {/*aqui foi  recebido a imagem do refrigerante */}
            <Produto_card imgsrc={img9} />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
