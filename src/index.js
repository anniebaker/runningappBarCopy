import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
// import AppContainer from "./AppContainer";
import "./index.css";
// import store from "./store";
// import { Provider } from "react-redux";

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById("root"));
