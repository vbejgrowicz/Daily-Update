/*jshint esversion:6*/
import React from 'react';

class WeatherImage extends React.Component {

  render() {
    return(
      <div className="weather-image" style={{backgroundImage: 'url(' + (this.props.image) +')'}}></div>
    );
  }
}

export default WeatherImage;
