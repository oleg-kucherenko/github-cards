import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <App title="Search GitHub profiles" />
  </React.StrictMode>,
  document.getElementById("root")
);
