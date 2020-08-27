import React from "react";
import "./login.css";

export default function esqueci_senha() {
  return (
    <div className="senha">
      <form className="login-form">
        <input type="email" name="email" placeholder="Digite o seu e-mail" />
        <input
          type="password"
          name="senha"
          placeholder="Digite uma nova senha"
        />
        <input type="password" name="senha" placeholder="Digite novamente" />

        <button type="button" class="btn btn-primary btn-sm">
          Enviar
        </button>
        <br />
      </form>
    </div>
  );
}
