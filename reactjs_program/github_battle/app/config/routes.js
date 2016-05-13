var React                  = require('react'),
    ReactRouter            = require('react-router'),
    Router                 = ReactRouter.Router,
    Route                  = ReactRouter.Route,
    IndexRoute             = ReactRouter.IndexRoute,
    hashHistory            = ReactRouter.hashHistory,
    Main                   = require('../components/main'),
    Home                   = require('../components/home'),
    PromptContainer        = require('../containers/prompt_container'),
    ConfirmBattleContainer = require('../containers/confirm_battle_container');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='playerOne' header='Player One' component={PromptContainer} />
      <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
      <Route path='battle' component={ConfirmBattleContainer} />
    </Route>
  </Router>
);

module.exports = routes;
