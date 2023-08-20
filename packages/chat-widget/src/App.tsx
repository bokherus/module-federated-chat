import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Chat from "./Chat";
import Inbox from "./Inbox";
import BrokenChat from "./BrokenChat";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <h1>Widget sandbox</h1>
    <Chat />
    {/* <BrokenChat /> */}
    <Inbox />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
