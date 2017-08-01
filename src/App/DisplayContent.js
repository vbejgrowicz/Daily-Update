/*jshint esversion:6*/
import React from 'react';
import DisplayArticles from '../Article/DisplayArticles';
import DisplayWeather from '../Weather/DisplayWeather';


class DisplayContent extends React.Component {

  render() {
    return this.props.isHomePage === true ? (
      <div className="content">
        <DisplayArticles isMainArticle={true} articles={this.props.articles && [this.props.articles[0]]} />
        <DisplayWeather weather={this.props.weather} />
        <div className="DataByImage"></div>
      </div>
    ): (
      <div className="content">
        <DisplayArticles isMainArticle={false} articles={this.props.articles} />
        <div className="DataByImage"></div>
      </div>
    );
  }
}


export default DisplayContent;
