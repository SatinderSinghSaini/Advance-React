import pickBy from "lodash.pickby";
import React, { useEffect, useState } from "react";
import ArticleList from "./ArticleList";
import SearchBar from "./SearchBar";
import TimeStamp from "./TimeStamp";
import StoreContext from "./StoreContext";

const App = (props) => {
  const [appState, setAppState] = useState(props.store.getState());
  useEffect(() => {
    const subscriptionId = props.store.subscribe(() => {
      setAppState(props.store.getState());
    });
    props.store.updateTimestamp();
    return () => props.store.unsubscribe(subscriptionId);
  }, [appState]);
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
      <TimeStamp timestamp={appState.timestamp} />
      <SearchBar doSearch={props.store.doSearch} />
      <ArticleList articles={getArticles()} />
    </StoreContext.Provider>
  );
};

export default App;
