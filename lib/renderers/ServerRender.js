import axios from "axios";
import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "../components/App";
import StateApi from "../DataApi";
import config from "../config";

const serverRender = async () => {
  const res = await axios.get(`http://${config.host}:${config.port}/data`);
  const store = new StateApi(res.data);
  return {
    initialMarkup: ReactDOMServer.renderToString(<App store={store} />),
    initialData: res.data,
  };
};

export default serverRender;
