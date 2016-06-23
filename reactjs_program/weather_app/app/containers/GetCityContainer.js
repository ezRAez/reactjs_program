import React, { Component, PropTypes } from 'react';

import GetCity from '../components/GetCity';

import WeatherUndergroundHelper from '../utils/WeatherUndergroundHelper';


class GetCityContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: 'column',
      city: '',
      currentWeather: null,
      weeklyWeather: null
    }
  }

  handleSubmitCity() {
   return WeatherUndergroundHelper.getWeather(this.state.city)
    .then(function(res) {
      this.setState = {
        currentWeather: res[0].data,
        weeklyWeather: res[1].data
      }
    }.bind(this));
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
        onSubmitCity={this.handleSubmitCity.bind(this)}
        onUpdateCity={this.handleUpdateCity.bind(this)}
        city={this.state.city} />
    )
  }
}

export default GetCityContainer;
