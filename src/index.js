import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DarkModProvider } from "context/DarkModContext";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModProvider>
        <App></App>
        <ToastContainer />
      </DarkModProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
