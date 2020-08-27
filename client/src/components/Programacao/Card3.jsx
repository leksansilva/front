import React, { Component } from "react";

import img4 from "../../assets/img/5passos.jpg"; /* importação de imagens de fimes */
import img5 from "../../assets/img/Cabana.jpg"; /* importação de imagens de fimes */
import img6 from "../../assets/img/Cinderela.jpg"; /* importação de imagens de fimes */

import Filmes2 from "./Filmes2";

/// Card dos filmes que estão vão entrar em cartaz

class Card3 extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            {/* chamada de imagens do fimes 5 passos de vc */}
            <Filmes2
              imgsrc={img4}
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi est reprehenderit beatae autem harum corrupti quibusdam mollitia consectetur, dolore iure.
"
            />
          </div>
          <div className="col-md-4">
            {/* chamada de imagens do fimes a cabana */}
            <Filmes2
              imgsrc={img5}
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi est reprehenderit beatae autem harum corrupti quibusdam mollitia consectetur, dolore iure.
"
            />
          </div>
          <div className="col-md-4">
            {/* chamada de imagens do fimes cinderela*/}
            <Filmes2
              imgsrc={img6}
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi est reprehenderit beatae autem harum corrupti quibusdam mollitia consectetur, dolore iure.
"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Card3;
