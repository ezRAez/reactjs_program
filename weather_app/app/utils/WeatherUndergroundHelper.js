import axios from 'axios';

import APIKey from '../APIKey';

function getCurrentWeather(cityState) {
  return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityState}&type=accurate&APPID=${APIKey}`);
}

function getWeeklyWeather(cityState) {
  return axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityState}&type=accurate&APPID=${APIKey}&cnt=5`);
}

const helpers = {
  getWeather: function getWeatherInfo(cityState) {
    let currentWeather = getCurrentWeather(cityState);
    let weeklyWeather  = getWeeklyWeather(cityState);

    return axios.all([currentWeather, weeklyWeather])
      .catch(function(err) {
        console.warn('Error in getWeather: ', err);
      });
  }
}

export default helpers;
