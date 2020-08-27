import React from "react";
import "./Header.css";

/* todo o cabeçalho*/
export default (props) => (
  <header className="header d-none d-sm-flex flex-column">
     <h1 className="mt-3">
      <i className={"fa fa${props.icon}"}></i>
      {props.title}
    </h1>
    <button type="button" class="btn btn-primary">Primary</button>
  </header>
);
