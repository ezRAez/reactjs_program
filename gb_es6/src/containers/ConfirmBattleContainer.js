import React        , { Component, PropTypes } from 'react';
import ConfirmBattle                           from '../components/ConfirmBattle';
import githubHelpers                           from '../utils/githubHelpers';

class ConfirmBattleContainer extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      isLoading: true,
      playersInfo: []
    }
    this.handleInitiateBattle = this.handleInitiateBattle.bind(this);
  }

  componentDidMount() {
    let query = this.props.location.query;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(players => {
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        });
      });
  }

  handleInitiateBattle() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  }

  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
        onInitiateBattle={this.handleInitiateBattle}
        />
    );
  }
}

export default ConfirmBattleContainer;
