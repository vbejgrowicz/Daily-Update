/*jshint esversion:6*/
import React from 'react';

class DisplayWeather extends React.Component {

  render() {
    console.log(this.props.weather);
    return this.props.weather ? (
      <div className="weather">
      {this.props.weather.map((weather, idx) => {
        return(
          <li className="full-weather" key={idx}>
            <a className="weather-link" href={weather.ob_url}>
              <div>
                <div>{weather.temp_f}</div>
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
