/*jshint esversion:6*/
import React from 'react';
import ArticleTitle from './ArticleTitle';
import ArticleAbstract from './ArticleAbstract';
import ArticleImage from './ArticleImage';

class DisplayArticles extends React.Component {

  render() {
    return (
      <div className="articles">
      {this.props.articles.map((article, idx) => {
        return(
          <li className="full-article" key={idx}>
            <a className="article-link" href={article.url}>
              <div className="article">
                <ArticleTitle title={article.title} />
                <ArticleAbstract abstract={article.abstract} />
                <ArticleImage images={article.multimedia} />
              </div>
            </a>
          </li>
        );
      })}
      </div>
    );
  }
}

export default DisplayArticles;
