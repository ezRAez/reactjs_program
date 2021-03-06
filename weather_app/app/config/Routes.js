import React from 'react';
import ReactRouter, {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from '../containers/Main'
import HomeContainer from '../containers/HomeContainer'

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={HomeContainer} />
    </Route>
  </Router>
)

export default routes;
