/*jshint esversion:6*/
import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  render() {
    return (
      <Link to="/">
        <div className="App-header"><h1 className="header">Daily Update</h1></div>
      </Link>
    );
  }
}

export default Header;
