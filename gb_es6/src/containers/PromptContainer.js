import React, { Component, PropTypes } from 'react';
import Prompt                          from '../components/Prompt';

class PromptContainer extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      username: ''
    };
    this.handleUpdateUser = this.handleUpdateUser.bind(this);
    this.handleSubmitUser = this.handleSubmitUser.bind(this);
  }

  handleUpdateUser(e) {
    this.setState({
      username: e.target.value
    });
  }

  handleSubmitUser(e) {
    e.preventDefault();
    this.setState({
      username: ''
    });

    if (this.props.routeParams.playerOne) {
      // go to /battle
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      // go to /playerTwo:p1username
      this.context.router.push(`/playerTwo/${this.state.username}`)
    }
  }

  render() {
    return (
      <Prompt
        onSubmitUser={ this.handleSubmitUser }
        onUpdateUser={ this.handleUpdateUser }
        header={       this.props.route.header }
        username={     this.state.username } />
    )
  }
};

export default PromptContainer;
