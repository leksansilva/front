import React from "react";
import Main from "../template/Main";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Programacao from "../Programacao/Card";
import img1 from "../../assets/img/img1.svg";
import img2 from "../../assets/img/drive.svg";
import img3 from "../../assets/img/2.png";

const Home = (props) => (
  <Main icon="home" title="TopsterCine">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={img1} alt="Primeiro Slide"></img>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={img2} alt="Segundo Slide"></img>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={img3} alt="Terceiro Slide"></img>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Anterior</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Próximo</span>
      </a>
    </div>
    <hr />
    <hr />
    <center>
      <h1>Filmes em Cartaz</h1>
    </center>
    <hr />
    <hr />
    <Programacao />
    
    <hr/>
    <center><button type="button" class="btn btn-primary">Ver todos</button></center>
    <hr />
    
    
  </Main>
);

export default Home;
