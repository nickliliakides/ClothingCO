import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import Shop from './pages/Shop';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
