import React, { Component } from 'react';
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from './error.boundary.styles';

export class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://image.flaticon.com/icons/png/512/1886/1886495.png' />
          <ErrorImageText>Sorry, something went wrong!</ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
