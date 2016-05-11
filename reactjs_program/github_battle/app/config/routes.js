var React       = require('react'),
    ReactRouter = require('react-router'),
    Router      = ReactRouter.Router,
    Route       = ReactRouter.Route,
    IndexRoute  = ReactRouter.IndexRoute,
    hashHistory = ReactRouter.hashHistory,
    Main        = require('../components/main'),
    Home        = require('../components/home');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

module.exports = routes;
