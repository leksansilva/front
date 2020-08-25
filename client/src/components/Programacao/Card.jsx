import React, { Component } from "react";
import Programacao from "../Programacao/programacao";
import img1 from "../../assets/img/Livros.jpg";
import img2 from "../../assets/img/Jogos_Mortais.jpg";
import img3 from "../../assets/img/Avatar.jpg";
class Card extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Programacao
              imgsrc={img1}
              text="aqui vai ficar a sinopse da menina que roubava livro"
            />
          </div>
          <div className="col-md-4">
            <Programacao
              imgsrc={img2}
              text="aqui vai ficar a sinopse de Jogos Vorazes"
            />
          </div>
          <div className="col-md-4">
            <Programacao
              imgsrc={img3}
              text="aqui vai ficar a sinopse de Avatar"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
