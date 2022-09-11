import axios from "axios";
import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "../components/App";
import DataApi from "../DataApi";
import config from "../config";

const serverRender = async () => {
  const res = await axios.get(`http://${config.host}:${config.port}/data`);
  const api = new DataApi(res.data);
  const initialData = {
    articles: api.getArticles(),
    authors: api.getAuthors(),
  };
  return {
    initialMarkup: ReactDOMServer.renderToString(
      <App initialData={initialData} />
    ),
    initialData: initialData,
  };
};

export default serverRender;
