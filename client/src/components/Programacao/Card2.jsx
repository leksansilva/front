import React, { Component } from "react";
import img1 from "../../assets/img/Livros.jpg";
import img2 from "../../assets/img/Jogos_Mortais.jpg";
import img3 from "../../assets/img/Avatar.jpg";

import Filmes2 from "./Filmes2";

/// Card dos filmes que estão disponiveis
class Card2 extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            {/* chamada da imagem de a menina que roubava livro */}
            <Filmes2
              imgsrc={img1}
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi est reprehenderit beatae autem harum corrupti quibusdam mollitia consectetur, dolore iure.
"
            />
          </div>
          <div className="col-md-4">
            {/* chamada da imagem de jogos vorazes */}
            <Filmes2
              imgsrc={img2}
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi est reprehenderit beatae autem harum corrupti quibusdam mollitia consectetur, dolore iure.
"
            />
          </div>
          <div className="col-md-4">
            {/* chamada da imagem de avatar */}
            <Filmes2
              imgsrc={img3}
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi est reprehenderit beatae autem harum corrupti quibusdam mollitia consectetur, dolore iure.
"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Card2;
