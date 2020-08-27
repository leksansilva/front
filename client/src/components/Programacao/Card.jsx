import React, { Component } from "react";
import Programacao from "../Programacao/programacao";
import img1 from "../../assets/img/Livros.jpg"; /*importação imagem do filme da menina que roubava livro */
import img2 from "../../assets/img/Jogos_Mortais.jpg"; /* importação imagem do filme jogos vorazes */
import img3 from "../../assets/img/Avatar.jpg"; /*importação das imagem do filme avatar */
class Card extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            {/* chamada da imagem de a menina que roubava livro */}
            <Programacao
              imgsrc={img1}
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi est reprehenderit beatae autem harum corrupti quibusdam mollitia consectetur, dolore iure.
"
            />
          </div>
          <div className="col-md-4">
            {/* chamada da imagem de jogos vorazes */}
            <Programacao
              imgsrc={img2}
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi est reprehenderit beatae autem harum corrupti quibusdam mollitia consectetur, dolore iure.
              "
            />
          </div>
          <div className="col-md-4">
            {/* chamada da imagem de avatar */}
            <Programacao
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

export default Card;
