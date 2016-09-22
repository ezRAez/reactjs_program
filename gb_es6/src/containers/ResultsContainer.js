import React  , { Component, PropTypes } from 'react';
import Results                           from '../components/Results';
import githubHelpers                     from '../utils/githubHelpers';

class ResultsContainer extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      isLoading: true,
      scores: []
    }
  }

  componentDidMount() {
    githubHelpers.battle(this.props.location.state.playersInfo)
      .then(scores => {
        this.setState({
          scores: scores,
          isLoading: false
        });
      });
  }

  render() {
    return (
      <Results
        isLoading={   this.state.isLoading }
        scores={      this.state.scores }
        playersInfo={ this.props.location.state.playersInfo } />
    );
  }
}

export default ResultsContainer;
