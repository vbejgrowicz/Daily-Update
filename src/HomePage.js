/*jshint esversion:6*/
import React from 'react';
import './Style/App.css';
import { getAll } from './API/ArticlesAPI';
import DisplayContent from './DisplayContent';
import NavBar from './Utilities/NavBar';
import Header from './Header';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: null,
      category: ""
    };
  }

componentDidMount() {
  this.setState({ category: this.props.category },this.getArticles);
}

updateCategory(newCategory) {
  this.setState({ category: newCategory }, this.getArticles);
}

getArticles() {
  getAll(this.state.category).then((articles) => {
    this.setState({ articles });
  });
}

  render() {
    return (
      <div>
        <Header />
        <NavBar category={this.state.category} updateCategory={this.updateCategory.bind(this)} />
        <DisplayContent isHomePage={this.props.isHomePage} category={this.state.category} articles={this.state.articles} />
        <div className="DataByImage"></div>
      </div>
    );
  }
}


export default HomePage;
