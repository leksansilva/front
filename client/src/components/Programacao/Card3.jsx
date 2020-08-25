import React, { Component } from "react";

import img4 from "../../assets/img/5passos.jpg";
import img5 from "../../assets/img/Cabana.jpg";
import img6 from "../../assets/img/Cinderela.jpg";

import Filmes2 from "./Filmes2";

/// Card dos filmes que estão vão entrar em cartaz

class Card3 extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Filmes2 imgsrc={img4} text="ele morre" />
          </div>
          <div className="col-md-4">
            <Filmes2 imgsrc={img5} text="é um drama?" />
          </div>
          <div className="col-md-4">
            <Filmes2 imgsrc={img6} text="Filme de pré adolescente chato" />
          </div>
        </div>
      </div>
    );
  }
}

export default Card3;
