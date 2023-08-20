# Module federated chat
A simple playground for testing module federation

## How to run
```sh
yarn
yarn start
```

This will run both the application at the same time locally on port `3000` and `3001`

## Testing network problems
Use chrome dev tools to block request from loading a specific component

<img width="610" alt="image" src="https://github.com/bokherus/module-federated-chat/assets/9125776/cf17c5d7-e67d-4800-9289-46952787e7d2">


## Fallback strategy
Some issue can happen during runtime integration of module federation including `network failure`, or `unexpected error from remote component`

Network issue can be handled while lazy loading like this
```tsx
const Chat = React.lazy(() =>
  import("chatWidget/Chat").catch(() => {
    console.error("Failed to load remote component.");
    return { default: () => <div>Failed to load remote component.</div> };
  })
);
```

while errors from remote component can be wrapped within ErrorBoundary to prevent error from breaking the host page like
https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary and then wrap the remote component with ErrorBoundary

```tsx
<ErrorBoundary fallback={<div>Unexpected error</div>}>
  <Chat />
</ErrorBoundary>
```
