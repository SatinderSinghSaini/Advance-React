import React, { useEffect, useState } from "react";
import axios from "axios";
import DataApi from "../DataApi";
//import { data } from "../testData.json";
import ArticleList from "./ArticleList";

const App = (props) => {
  const [appState, setAppState] = useState({
    articles: props.initialData.articles,
    authors: props.initialData.authors,
  });

  // useEffect(() => {
  //   axios
  //     .get("/data")
  //     .then((res) => {
  //       const api = new DataApi(res.data);
  //       const state = {
  //         articles: api.getArticles(),
  //         authors: api.getAuthors(),
  //       };
  //       setAppState(state);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const articleActions = {
    authorLookup: (authorId) => {
      return appState.authors[authorId];
    },
  };

  return (
    <ArticleList articles={appState.articles} articleActions={articleActions} />
  );
};

export default App;
