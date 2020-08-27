import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './store/selectors/user.selectors';
import { checkUserSession } from './store/actions/user.actions';
import { GlobalStyle } from './global.styles';
import Header from './components/Header';
import {
  SpinnerContainer,
  SpinnerOverlay,
} from './components/Spinner/spinner.styles';
import ErrorBoundary from './components/ErrorBoundary';

const HomePage = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const SignInUp = lazy(() => import('./pages/SignIn'));
const CheckOut = lazy(() => import('./pages/Checkout'));

function App({ currentUser, checkUserSession }) {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense
            fallback={
              <SpinnerOverlay>
                <SpinnerContainer />
              </SpinnerOverlay>
            }
          >
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={Shop} />
            <Route
              exact
              path='/signin'
              render={() => (currentUser ? <Redirect to='/' /> : <SignInUp />)}
            />
            <Route exact path='/checkout' component={CheckOut} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
