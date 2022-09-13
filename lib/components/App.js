import React, { useState } from "react";
import ArticleList from "./ArticleList";
import StoreContext from "./StoreContext";

const App = (props) => {
  const [appState, setAppState] = useState(props.store.getState());
  return (
    <StoreContext.Provider value={props.store}>
      <ArticleList articles={appState.articles} />
    </StoreContext.Provider>
  );
};

export default App;
