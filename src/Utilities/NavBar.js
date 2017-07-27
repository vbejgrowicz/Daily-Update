/*jshint esversion:6*/
import React from 'react';
import {Nav, NavItem } from 'react-bootstrap';

class NavBar extends React.Component {

handleSelect(e) {
  this.props.updateCategory(e);
}

  render() {
    return (
      <Nav bsStyle="tabs" activeKey={this.props.category} onSelect={(e) => this.handleSelect(e)}>
        <NavItem eventKey="home" href="/">Home</NavItem>
        <NavItem eventKey="opinion" href="/">Opinion</NavItem>
        <NavItem eventKey="world" href="/">World</NavItem>
        <NavItem eventKey="national" href="/">National</NavItem>
        <NavItem eventKey="politics" href="/">Politics</NavItem>
        <NavItem eventKey="upshot" href="/">Upshot</NavItem>
        <NavItem eventKey="nyregion" href="/">NY Region</NavItem>
        <NavItem eventKey="business" href="/">Buisness</NavItem>
        <NavItem eventKey="technology" href="/">Technology</NavItem>
        <NavItem eventKey="science" href="/">Science</NavItem>
        <NavItem eventKey="sports" href="/">Sports</NavItem>
        <NavItem eventKey="arts" href="/">Arts</NavItem>
        <NavItem eventKey="books" href="/">Books</NavItem>
        <NavItem eventKey="movies" href="/">Movies</NavItem>
        <NavItem eventKey="theater" href="/">Theater</NavItem>
        <NavItem eventKey="sundayreview" href="/">Sunday Review</NavItem>
        <NavItem eventKey="fashion" href="/">Fashion</NavItem>
        <NavItem eventKey="tmagazine" href="/">T Magazine</NavItem>
        <NavItem eventKey="food" href="/">Food</NavItem>
        <NavItem eventKey="travel" href="/">Travel</NavItem>
        <NavItem eventKey="magazine" href="/">Magazine</NavItem>
        <NavItem eventKey="realestate" href="/">Real Estate</NavItem>
        <NavItem eventKey="automobiles" href="/">Automobiles</NavItem>
        <NavItem eventKey="obituaries" href="/">Obituaries</NavItem>
        <NavItem eventKey="insider" href="/">Insider</NavItem>
      </Nav>
    );
  }
}

export default NavBar;
