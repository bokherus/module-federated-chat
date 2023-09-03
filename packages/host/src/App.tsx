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
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Layout } from "./components/Layout";
import { GalleryView } from "./components/GalleryView";

const App: React.FC = () => (
  <Layout>
    <GalleryView>
      <React.Suspense fallback={<div />}>
        <Chat locale="jp-jp" />
      </React.Suspense>
      <React.Suspense fallback={<div />}>
        <Inbox />
      </React.Suspense>
      <React.Suspense fallback={<div />}>
        <ErrorBoundary fallback={<div>Fallback from error boundary due to error from component</div>}>
          <BrokenChat />
        </ErrorBoundary>
      </React.Suspense>
    </GalleryView>
  </Layout>
);
ReactDOM.render(<App />, document.getElementById("app"));
