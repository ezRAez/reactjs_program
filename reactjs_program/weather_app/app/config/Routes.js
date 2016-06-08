import React from 'react';
import ReactRouter, {Router, Route, IndexRoute, hashHistory} from 'react-router';
import HelloWorld from '../components/main'

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={HelloWorld}>
    </Route>
  </Router>
)

export default routes;
