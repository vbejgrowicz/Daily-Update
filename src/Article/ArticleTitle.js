/*jshint esversion:6*/
import React from 'react';

class ArticleTitle extends React.Component {

  render() {
    return (
      <div className="title" style={this.props.isMainArticle ? { fontSize : 'x-large' } : {} }>{this.props.title}</div>
    );
  }
}

export default ArticleTitle;
