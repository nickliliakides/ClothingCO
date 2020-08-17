import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './store/selectors/user.selectors';
import { checkUserSession } from './store/actions/user.actions';
import './App.css';
import HomePage from './pages/Home';
import Shop from './pages/Shop';
import Header from './components/Header';
import SignInUp from './pages/SignIn';
import CheckOut from './pages/Checkout';

function App({ currentUser, checkUserSession }) {
  useEffect(() => {
    checkUserSession();
    // auth.onAuthStateChanged(async (userAuth) => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot((snapShot) => {
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data(),
    //       });
    //       // setState({
    //       // currentUser: {
    //       //   id: snapShot.id,
    //       //   ...snapShot.data(),
    //       // },
    //       // });
    //     });
    //   }
    //   setCurrentUser(userAuth);
    //   return () => {
    //     setCurrentUser(null);
    //   };
    // });
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route
          exact
          path='/signin'
          render={() => (currentUser ? <Redirect to='/' /> : <SignInUp />)}
        />
        <Route exact path='/checkout' component={CheckOut} />
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
