/*jshint esversion:6*/
import React from 'react';
import './Style/App.css';
import { getAll } from './API/ArticlesAPI';
import DisplayArticles from './Article/DisplayArticles';
import NavBar from './Utilities/NavBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      category: 'home',
    };
  }

componentDidMount() {
  this.getArticles();
}

updateCategory(newCategory) {
  this.setState({ category: newCategory}, this.getArticles);
}

getArticles() {
  getAll(this.state.category).then((articles) => {
    this.setState({ articles });
  });
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>News!</h2>
        </div>
        <NavBar category={this.state.category} updateCategory={this.updateCategory.bind(this)} />
        <DisplayArticles articles={this.state.articles} />
        <div className="DataByImage"></div>
      </div>
    );
  }
}

export default App;
