import React from "react";
import "./card-style.css";
const Filmes = (props) => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="filme1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        {/* chamada do titulo */}
        <h4 className="card-title">Sinopse</h4>
        <p className="card-text text-secondary">{props.text}</p>
        {/* chamada dos botoes */}
        <a className="btn btn-outline-success">trailer</a>

        <a href="#" class="fas fa-ticket-alt" class="btn btn-outline-success">
          Ingresso
        </a>
      </div>
    </div>
  );
};

export default Filmes;
