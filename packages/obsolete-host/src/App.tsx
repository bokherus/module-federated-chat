import React from "react";
import ReactDOM from "react-dom";

const Chat = React.lazy(() =>
  import("chatWidget/Chat").catch(() => {
    console.error("Failed to load remote component.");
    return { default: () => <div>Failed to load remote component. Falling back to NPM</div> };
  })
);

const Inbox = React.lazy(() => import("chatWidget/Inbox"));

const BrokenChat = React.lazy(() => import("chatWidget/BrokenChat"));

import "./index.scss";
import { ErrorBoundary } from "./ErrorBoundary";

const App: React.FC = () => {
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <h1>Host application with React 16.6.0</h1>
      <React.Suspense fallback={<div />}>
        <Chat />
      </React.Suspense>
      <React.Suspense fallback={<div />}>
        <Inbox />
      </React.Suspense>
      <React.Suspense fallback={<div />}>
        <ErrorBoundary fallback={<div>Fallback from error boundary due to error from component</div>}>
          <BrokenChat />
        </ErrorBoundary>
      </React.Suspense>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
