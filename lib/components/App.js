import pickBy from "lodash.pickby";
import React, { useEffect, useState } from "react";
import ArticleList from "./ArticleList";
import SearchBar from "./SearchBar";
import StoreContext from "./StoreContext";

const App = (props) => {
  const [appState, setAppState] = useState(props.store.getState());
  useEffect(() => {
    const subscriptionId = props.store.subscribe(() => {
      setAppState(props.store.getState());
    });
    return () => props.store.unsubscribe(subscriptionId);
  }, [appState.searchTerm]);
  const getArticles = () => {
    const searchTerm = appState.searchTerm;
    if (searchTerm) {
      const searched_articles = pickBy(appState.articles, (value) => {
        return value.title.match(searchTerm) || value.body.match(searchTerm);
      });
      return searched_articles;
    } else {
      return appState.articles;
    }
  };
  return (
    <StoreContext.Provider value={props.store}>
      <SearchBar doSearch={props.store.doSearch} />
      <ArticleList articles={getArticles()} />
    </StoreContext.Provider>
  );
};

export default App;
