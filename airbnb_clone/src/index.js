import React from "react"
import {createRoot} from "react-dom/client"
import {StrictMode} from 'react';
import App from "./App"
import "./style.css"

let root = document.getElementById("root")
root = createRoot(root);

root.render(
  <StrictMode>
      <App/>
  </StrictMode>,
);