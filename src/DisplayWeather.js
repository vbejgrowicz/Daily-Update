/*jshint esversion:6*/
import React from 'react';

class DisplayWeather extends React.Component {

  render() {
    console.log(this.props.weather);
    return this.props.weather ? (
      <div className="weather">
      {[this.props.weather].map((weather, idx) => {
        return(
          <li className="full-weather" key={idx}>
            <a className="weather-link" href={weather.forecast_url}>
              <div>
                <div>Location: {weather.display_location.full}</div>
                <div>Current Temperature: {weather.temp_f}</div>
                <div>Feels Like: {weather.feelslike_f}</div>
                <div className="weather-image" style={{backgroundImage: 'url(' + (weather.icon_url) +')'}}></div>
              </div>
            </a>
          </li>
        );
      })}
      </div>
    ): null;
  }

}


export default DisplayWeather;
