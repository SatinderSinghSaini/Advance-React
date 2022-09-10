import React, { useState } from "react";
import DataApi from "../DataApi";
import { data } from "../testData.json";
import ArticleList from "./ArticleList";

const api = new DataApi(data);

const App = () => {
  const [articles, setArtices] = useState(api.getArticles());
  const [authors, setAuthors] = useState(api.getAuthors());

  const articleActions = {
    authorLookup: (authorId) => authors[authorId],
  };

  return <ArticleList articles={articles} articleActions={articleActions} />;
};

export default App;
