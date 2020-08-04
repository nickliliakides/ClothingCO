import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import Shop from './pages/Shop';
import Header from './components/Header';
import SignInUp from './pages/SignIn';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

function App() {
  const [state, setState] = useState({
    currentUser: null,
  });

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }

      setState({
        currentUser: userAuth,
      });

      return () => {
        setState({
          currentUser: null,
        });
      };
    });
  }, []);

  return (
    <div>
      <Header currentUser={state.currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/signin' component={SignInUp} />
      </Switch>
    </div>
  );
}

export default App;
