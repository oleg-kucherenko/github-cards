import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";

/**
 * An entry point of the application
 */
ReactDOM.render(
  <React.StrictMode>
    <App title="The GitHub Cards App" />
  </React.StrictMode>,
  document.getElementById("root")
);
