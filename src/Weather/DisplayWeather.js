/*jshint esversion:6*/
import React from 'react';
import WeatherLocation from './WeatherLocation';
import WeatherTemp from './WeatherTemp';
import WeatherImage from './WeatherImage';


class DisplayWeather extends React.Component {

  render() {
    console.log(this.props.weather);
    return this.props.weather ? (
      <div className="weather">
      {[this.props.weather].map((weather, idx) => {
        console.log(weather.image.url);
        return(
          <li className="full-weather" key={idx}>
            <a className="weather-link" href={weather.forecast_url}>
              <div>
                <WeatherLocation location={weather.display_location.full} />
                <WeatherImage image={weather.icon_url} />
                <WeatherTemp temp={weather.temp_f} feelslike={weather.feelslike_f} />
                <div className="weather-logo" style={{backgroundImage: 'url(' + (weather.image.url) +')'}}></div>
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
