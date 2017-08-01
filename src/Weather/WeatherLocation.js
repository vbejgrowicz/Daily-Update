/*jshint esversion:6*/
import React from 'react';

class WeatherLocation extends React.Component {

  render() {
    return (
      <div className="weather-location">{this.props.location}</div>
    );
  }
}

export default WeatherLocation;
