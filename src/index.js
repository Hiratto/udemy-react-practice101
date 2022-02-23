import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    <div>
      <h1>Hello!!</h1>
      <p>World!!</p>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
