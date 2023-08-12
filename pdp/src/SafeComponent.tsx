import React from "react";

type State = {hasError: false}

export default class SafeComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false } as any;
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}