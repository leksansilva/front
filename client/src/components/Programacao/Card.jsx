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
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi est reprehenderit beatae autem harum corrupti quibusdam mollitia consectetur, dolore iure.
"
            />
          </div>
          <div className="col-md-4">
            <Programacao
              imgsrc={img2}
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi est reprehenderit beatae autem harum corrupti quibusdam mollitia consectetur, dolore iure.
              "
            />
          </div>
          <div className="col-md-4">
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
