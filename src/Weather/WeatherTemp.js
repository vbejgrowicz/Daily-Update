/*jshint esversion:6*/
import React from 'react';

class WeatherTemp extends React.Component {

  render() {
    return (
      <div className="weather-temp">
        <div className="current-temp">{this.props.temp} &deg;F</div>
        <div className="feels-like-temp">Feels Like {this.props.feelslike} &deg;F</div>
      </div>
    );
  }
}


export default WeatherTemp;
