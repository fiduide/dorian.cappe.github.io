import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DarkModProvider } from "context/DarkModContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModProvider>
        <App />
      </DarkModProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
