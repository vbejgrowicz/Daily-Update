/*jshint esversion:6*/
import React from 'react';
import './Style/App.css';
import DisplayArticles from './Article/DisplayArticles';


class DisplayContent extends React.Component {

  render() {
    return this.props.isHomePage === true ? (
      <div>
        <DisplayArticles isMainArticle={true} articles={this.props.articles && [this.props.articles[2]]} />
      </div>
    ): (
      <div>
        <DisplayArticles isMainArticle={false} articles={this.props.articles} />
      </div>
    );
  }
}


export default DisplayContent;
