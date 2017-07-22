var React = require('react');

var WeatherMessage = ({location, temp}) => {
  return (
      <h3>The temperature in {location} is {temp}ºC</h3>
  );
}

module.exports = WeatherMessage;
