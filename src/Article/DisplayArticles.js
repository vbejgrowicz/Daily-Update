/*jshint esversion:6*/
import React from 'react';
import ArticleTitle from './ArticleTitle';
import ArticleAbstract from './ArticleAbstract';
import ArticleImage from './ArticleImage';

class DisplayArticles extends React.Component {

  render() {
    return this.props.articles ? (
      <div className="articles">
      {this.props.articles.map((article, idx) => {
        return(
          <li className="full-article" key={idx}>
            <a className="article-link" href={article.url}>
              <div className={this.props.isMainArticle ? "main-article" : "article"}>
                <ArticleTitle isMainArticle={this.props.isMainArticle} title={article.title} />
                <ArticleAbstract isMainArticle={this.props.isMainArticle} abstract={article.abstract} />
                <ArticleImage isMainArticle={this.props.isMainArticle} images={article.multimedia} />
              </div>
            </a>
          </li>
        );
      })}
      </div>
    ): null;
  }
}

export default DisplayArticles;
