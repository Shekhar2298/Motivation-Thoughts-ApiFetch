import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import "./index.css";
import Show from "./JsonApi";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 /* <React.StrictMode>
    <App />
    
  </React.StrictMode>*/
  <Show/>
);
