import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { DataLayer } from "./StateManagement/DataLayer";
import App from "./App";
import { initialState } from "./StateManagement/Reducer";
import { reducer } from "./StateManagement/Reducer";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialstate={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
