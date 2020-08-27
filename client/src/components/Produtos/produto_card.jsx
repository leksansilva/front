import React from "react";
import "./produtos.css"; /* importação do css */

const Produto_card = (props) => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        {/* chamada da imagem */}
        <img src={props.imgsrc} alt="Image 1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        {/*chamada do botão */}
        <a href="#" className="btn btn-outline-success">
          Adicionar o carrinho
        </a>
      </div>
    </div>
  );
};
export default Produto_card;
