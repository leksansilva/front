import React from "react";
import "./produtos.css";

const Produto_card = (props) => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">Combo comum</h4>
        <a href="#" className="btn btn-outline-success">
          Comprar
        </a>
      </div>
    </div>
  );
};
export default Produto_card;
