/*jshint esversion:6*/
import React from 'react';

class ArticleTitle extends React.Component {

  render() {
    return (
      <div className="title">{this.props.title}</div>
    );
  }
}

export default ArticleTitle;
