import React, { Component } from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import indexRoutes from './routes/index';
// import { createStore } from 'redux';

// const store = createStore()
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return <Route path={prop.path} key={key} component={prop.component} />;
          })}
        </Switch>
      </Router>
    );
  }
}

export default App;
