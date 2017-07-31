/*jshint esversion:6*/
import React from 'react';

class ArticleImage extends React.Component {

  render() {
    return(
      <div className={this.props.isMainArticle ? "main-image" : "article-image"}>
      {this.props.images.length > 3 ? (
        <div className="image" style={this.props.isMainArticle ? {backgroundImage: 'url(' + (this.props.images.length > 0 && this.props.images[4].url) +')'} : {backgroundImage: 'url(' + (this.props.images.length > 0 && this.props.images[3].url) +')'}}></div>
      ):(
        <div className="no-image"></div>
      )
      }
      </div>
    );
  }
}

export default ArticleImage;
