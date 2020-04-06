import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Heading } from './components/Heading';
import { Home } from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

function App() {
  return (
    <Router>
      <Heading />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
