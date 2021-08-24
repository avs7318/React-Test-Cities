import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  // React.createElement("h1",
  // {style : {color : "darkblue" } },"Hello World!"),
  <App />,
  rootElement
);
