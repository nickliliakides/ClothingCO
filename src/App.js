import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { selectCurrentUser } from './store/selectors/user.selectors';
import { setCurrentUser } from './store/actions/user.actions';
import './App.css';
import HomePage from './pages/Home';
import Shop from './pages/Shop';
import Header from './components/Header';
import SignInUp from './pages/SignIn';
import CheckOut from './pages/Checkout';

function App({ setCurrentUser, currentUser }) {
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
          // setState({
          // currentUser: {
          //   id: snapShot.id,
          //   ...snapShot.data(),
          // },
          // });
        });
      }

      setCurrentUser(userAuth);

      return () => {
        setCurrentUser(null);
      };
    });
  }, [setCurrentUser]);

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
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
