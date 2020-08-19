import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

const Spinner = (WrappedComponent) => ({ loading, ...otherProps }) => {
  return loading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default Spinner;
