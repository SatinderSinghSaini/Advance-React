import React, { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
const App = () => {
  const [value, setValue] = useState(20);
  useEffect(() => {
    const asyncValue = () => {
      return Promise.resolve(90);
    };
    setTimeout(() => asyncValue().then((val) => setValue(val)), 1000);
  }, []);
  return <h1> {`Hello React Value= ${value}`}</h1>;
};

ReactDOM.render(<App />, document.getElementById("root"));
