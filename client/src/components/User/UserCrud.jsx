import React, { Component } from "react";
import "./UserCrud.css";
import Main from "../template/Main";

const headerProps = {};
/* tela de cadastro com formulario*/

export default class UserCrud extends Component {
  render() {
    return (
      <Main icon="users" title="Cadastro" {...headerProps}>
        <form>
            <div className="form-group">
              <label for="inputAddress">Nome completo</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="Nome completo" ></input>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Email</label>
                  <input type="email" className="form-control" id="inputEmail4" placeholder="Email" ></input>
                </div>

                <div className="form-group col-md-6">
                  <label for="inputEmail14">Telefone</label>
                  <input type="email" className="form-control" id="inputEmail4" placeholder="Telefone"></input>
                </div>

                <div className="form-group col-md-6">
                  <label for="inputEmail4">RG</label>
                  <input type="email" className="form-control" id="inputEmail4" placeholder="RG"></input>
                </div>

                <div className="form-group col-md-6">
                  <label for="inputPassword4">CPF</label>
                  <input type="text" className="form-control" id="inputPassword4" placeholder="CPF"></input>
                </div>

                <div className="form-group col-md-6">
                  <label for="inputEmail4">Senha</label>
                  <input type="email" className="form-control" id="inputEmail4" placeholder="Senha"></input>
                </div>

                <div className="form-group col-md-6">
                  <label for="inputPassword4">Confirme a senha</label>
                  <input type="password"className="form-control" id="inputPassword4" placeholder="confirme a senha"></input>
              </div>
            </div>

            <button type="button" class="btn btn-primary">
              Cadastre-se
            </button>
        </form>
      </Main>
    );
  }
}
