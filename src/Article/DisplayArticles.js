/*jshint esversion:6*/
import React from 'react';
import ArticleTitle from './ArticleTitle';
import ArticleAbstract from './ArticleAbstract';
import ArticleImage from './ArticleImage';

class DisplayArticles extends React.Component {

  render() {
    return this.props.articles ? (
      <div className={this.props.isMainArticle ? "home-page-news" : "articles"}>
      {this.props.articles.map((article, idx) => {
        return(
          <li className={this.props.isMainArticle ? "home-page-article" : "full-article-grid"} key={idx}>
            <a className="article-link" href={article.url}>
              <div className="article">
                <ArticleTitle isMainArticle={this.props.isMainArticle} title={article.title} />
                <ArticleAbstract isMainArticle={this.props.isMainArticle} abstract={article.abstract} />
                <ArticleImage isMainArticle={this.props.isMainArticle} images={article.multimedia} />
              </div>
            </a>
          </li>
        );
      })}
      <div className="DataByImage"></div>
      </div>
    ): null;
  }
}

export default DisplayArticles;
