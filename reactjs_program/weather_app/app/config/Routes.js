import React from 'react';
import ReactRouter, {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from '../components/Mane'

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>
)

export default routes;
