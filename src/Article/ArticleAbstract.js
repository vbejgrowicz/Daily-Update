/*jshint esversion:6*/
import React from 'react';

class ArticleAbstract extends React.Component {

  render() {
    return (
      <div className="abstract">{this.props.abstract}</div>
    );
  }
}

export default ArticleAbstract;
