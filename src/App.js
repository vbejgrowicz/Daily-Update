/*jshint esversion:6*/
import React from 'react';
import { Route } from 'react-router-dom';
import './Style/App.css';
import MainPage from './MainPage';

class App extends React.Component {

  render() {
    return(
      <div className="App">
        <Route path="/" render={({ location }) => <MainPage pathname={location.pathname} category={location.pathname.split('/').join("")} />} />
      </div>
    );
  }
}

export default App;
