import React, { Component, PropTypes } from 'react';
import ConfirmBattle from '../components/ConfirmBattle'

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
  }

  componentDidMount() {
    // let query = this.props.location.query;
    // Fetch info from github then update state
  }

  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
        />
    );
  }
}

export default ConfirmBattleContainer;
