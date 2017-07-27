/*jshint esversion:6*/
import React from 'react';

class ArticleImage extends React.Component {

  render() {
    return (
    <div className="image" style={{ width: 210, height: 140, backgroundImage: 'url(' + (this.props.images.length > 0 && this.props.images[3].url) +')'}}>
    </div>
    );
  }
}

export default ArticleImage;
