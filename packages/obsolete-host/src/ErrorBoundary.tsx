import React, { ErrorInfo } from 'react';

type Props = {
    fallback: JSX.Element;
}

type State = {
    hasError: boolean;
}

const logError = (error: Error, message: string) => {
    // Log error to server
};

export class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(_: Error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error: Error, info: ErrorInfo) {
      logError(error, info.componentStack);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return this.props.fallback;
      }
  
      return this.props.children;
    }
  }