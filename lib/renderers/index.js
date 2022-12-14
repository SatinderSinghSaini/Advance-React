import React from "react";
import * as ReactDOM from "react-dom";
import App from "../components/App";
import StateApi from "../DataApi";

const store = new StateApi(window.initialData);
ReactDOM.render(<App store={store} />, document.getElementById("root"));
