import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import Shop from './pages/Shop';
import Header from './components/Header';
import SignInUp from './pages/SignIn';
import { auth } from './firebase/firebase.utils';

function App() {
  const [state, setState] = useState({
    currentUser: null,
  });

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setState({
        currentUser: user,
      });

      console.log('App -> user', user);

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
