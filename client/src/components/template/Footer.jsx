import React from "react";
import "./Footer.css";

/* aqui tem todo o rodapé*/
function Rodape(props) {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Coluna 1*/}
          <div className="col-md-3 col-sm-6">
            <h4>Contato</h4>
            <ul className="list-unstyled">
              <li class="fab fa-whatsapp">  (75)3421-0000</li>
              <li>
                <i class="fas fa-envelope">  TopsterCine@gmail.com</i>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4>Rede Social</h4>
            <ul className="list-unstyled">
              <li class="fab fa-facebook-f">   Facebook </li>
              <li> 
              <i class="fab fa-twitter">  twitter</i>
             </li>
              <li>
                <i class="fab fa-instagram">  Instagram</i>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4>Endereço</h4>
            <ul className="list-unstyled">
              <li>
                Rua Padre godinho-Centro ao lado da lachonete rei dos pasteis
              </li>
            </ul>
          </div>
        </div>
        {/* Botão do rodape*/}
        <div className="footer-bottom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} TopsterCine
          </p>
        </div>
      </div>
    </div>
  );
}
export default Rodape;
