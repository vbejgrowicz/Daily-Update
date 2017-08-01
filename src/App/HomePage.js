/*jshint esversion:6*/
import React from 'react';
import { getWeather } from '../API/WeatherAPI';
import { getAll } from '../API/ArticlesAPI';
import Loading from '../Utilities/Loading';
import NavBar from '../Utilities/NavBar';
import Header from './Header';
import DisplayContent from './DisplayContent';


class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: null,
      category: "",
      isLoading: true,
      weather: null
    };
  }

componentDidMount() {
  this.setState({ category: this.props.category },this.getArticles);
  this.getWeatherData();
}

updateCategory(newCategory) {
  this.setState({ isLoading: true, articles: null, category: newCategory }, this.getArticles);
}

getArticles() {
  getAll(this.state.category).then((articles) => {
    this.setState({ articles, isLoading: false });
  });
}

getWeatherData() {
  getWeather("NY", "New York").then((weather) => {
    this.setState({ weather });
  });
}

  render() {
    return (
      <div>
        <Header />
        <NavBar category={this.state.category} updateCategory={this.updateCategory.bind(this)} />
        {this.state.isLoading ? (<Loading />) : (<DisplayContent isHomePage={this.props.isHomePage} category={this.state.category} articles={this.state.articles} weather={this.state.weather} />)}
      </div>
    );
  }
}


export default HomePage;
