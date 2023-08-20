import React from "react";
import ReactDOM from "react-dom";
const Chat = React.lazy(() => import("chatWidget/Chat"));

import "./index.scss";

const App: React.FC = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <h1>Host application</h1>
    <React.Suspense fallback={<div />}>
      <Chat />
    </React.Suspense>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
