import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./css/custom.css";
import "./fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/jquery/dist/jquery";
import "bootstrap/dist/js/bootstrap.bundle";
import Routes from "./routes";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
