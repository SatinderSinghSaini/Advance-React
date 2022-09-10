import React, { useState } from "react";
import DataApi from "../DataApi";
import { data } from "../testData.json";
import ArticleList from "./ArticleList";

const api = new DataApi(data);

const App = () => {
  const [articles, setArtices] = useState(api.getArticles());
  const [authors, setAuthors] = useState(api.getAuthors());

  return <ArticleList articles={articles} authors={authors} />;
};

export default App;
