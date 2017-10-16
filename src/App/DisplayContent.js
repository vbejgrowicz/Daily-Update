/*jshint esversion:6*/
import React from 'react';
import DisplayArticles from '../Article/DisplayArticles';
import DisplayWeather from '../Weather/DisplayWeather';


class DisplayContent extends React.Component {

  render() {
    return this.props.isHomePage === true ? (
      <div>
        <div className="content">
          <DisplayArticles isMainArticle={true} articles={this.props.articles && [this.props.articles[0]]} />
          <div>
            <DisplayWeather weather={this.props.weather} />
            <div className="stockticker"><iframe title="stockticker" className="ticker" width="280" scrolling="no" height="280" src="https://widgets.tc2000.com/WidgetServer.ashx?id=64007"></iframe></div>
          </div>
        </div>
        <div className="DataByImage"></div>
      </div>
    ): (
      <div>
      <div className="content">
        <DisplayArticles isMainArticle={false} articles={this.props.articles} />
      </div>
        <div className="DataByImage"></div>
      </div>
    );
  }
}


export default DisplayContent;
