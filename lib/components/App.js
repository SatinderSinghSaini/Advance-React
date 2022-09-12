import React, { useEffect, useState } from "react";
import axios from "axios";
import DataApi from "../DataApi";
//import { data } from "../testData.json";
import ArticleList from "./ArticleList";

const App = (props) => {
  const [appState, setAppState] = useState(props.store.getState());
  return (
    <ArticleList
      articles={appState.articles}
      authorLookup={props.store.authorLookup}
    />
  );
};

export default App;
