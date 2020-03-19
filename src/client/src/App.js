import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Home } from './components/Home/Home';
import { HomeInChinese } from './components/Home/HomeInChinese'
import { Search } from './components/Search/Search';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/search">
          <Search/>
        </Route>
        <Route path="/cn">
          <HomeInChinese/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
