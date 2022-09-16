import pickBy from "lodash.pickby";
import React, { useState } from "react";
import ArticleList from "./ArticleList";
import SearchBar from "./SearchBar";
import StoreContext from "./StoreContext";

const App = (props) => {
  const [appState, setAppState] = useState(props.store.getState());
  const [articles, setArticles] = useState(appState.articles);
  const doSearch = (searchTerm) => {
    const searched_articles = pickBy(appState.articles, (value) => {
      return value.title.match(searchTerm) || value.body.match(searchTerm);
    });
    setArticles(searched_articles);
  };
  return (
    <StoreContext.Provider value={props.store}>
      <SearchBar doSearch={doSearch} />
      <ArticleList articles={articles} />
    </StoreContext.Provider>
  );
};

export default App;
