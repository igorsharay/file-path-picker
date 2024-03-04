import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import filesData from "./filesData.json";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App filesData={filesData} />
  </React.StrictMode>
);
