import React from "react";
import ReactDOM from "react-dom";
var count = 0;
function App() {
  function increase() {
    count++;
    ReactDOM.render(
      <div className="container">
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
      </div>,
      document.getElementById("root")
    );
  }
  return ReactDOM.render(
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>,
    document.getElementById("root")
  );
}

export default App;
