import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Chat from "./Chat";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <h1>Widget sandbox</h1>
    <Chat />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
