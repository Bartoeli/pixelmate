import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { Detail } from './pages/detail/Detail.jsx';
import { Homepage } from './pages/homepage/Homepage.jsx';
import { List } from './pages/list/List.jsx';

import './index.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/detail/:key">
          <Detail />
        </Route>
        <Route path="/list">
          <List />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
