/*jshint esversion:6*/
import React from 'react';
import './Style/App.css';

class Header extends React.Component {

  render() {
    return (
      <a href="/">
        <div className="App-header">Daily Update</div>
      </a>
    );
  }
}

export default Header;
