import React, { Component, PropTypes } from 'react';

import GetCity from '../components/GetCity';

class GetCityContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: 'column',
      city: ''
    }
  }

  handleSubmitCity() {
    console.log(this.state.city);
  }

  handleUpdateCity(e) {
    this.setState({
      city: e.target.value
    })
  }

  render() {
    return (
      <GetCity
        direction={this.props.direction}
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city} />
    )
  }
}

export default GetCityContainer;
