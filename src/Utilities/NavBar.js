/*jshint esversion:6*/
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class NavBar extends React.Component {

handleSelect(e) {
  this.props.updateCategory(e);
}

  render() {
    return (
      <Nav bsStyle="tabs" justified activeKey={this.props.category} onSelect={(e) => this.handleSelect(e)}>
        <LinkContainer to="/home"><NavItem eventKey="home">Top Stories</NavItem></LinkContainer>
        <LinkContainer to="/world"><NavItem eventKey="world">World</NavItem></LinkContainer>
        <LinkContainer to="/national"><NavItem eventKey="national">National</NavItem></LinkContainer>
        <LinkContainer to="/politics"><NavItem eventKey="politics">Politics</NavItem></LinkContainer>
        <LinkContainer to="/buisness"><NavItem eventKey="business">Buisness</NavItem></LinkContainer>
        <LinkContainer to="/technology"><NavItem eventKey="technology">Technology</NavItem></LinkContainer>
        <LinkContainer to="/sports"><NavItem eventKey="sports">Sports</NavItem></LinkContainer>
        <NavDropdown title="More" id="nav-dropdown">
          <LinkContainer to="/opinion"><MenuItem eventKey="opinion">Opinion</MenuItem></LinkContainer>
          <LinkContainer to="/upshot"><MenuItem eventKey="upshot">Upshot</MenuItem></LinkContainer>
          <LinkContainer to="/nyregion"><MenuItem eventKey="nyregion">NY Region</MenuItem></LinkContainer>
          <LinkContainer to="/science"><MenuItem eventKey="science">Science</MenuItem></LinkContainer>
          <LinkContainer to="/insider"><MenuItem eventKey="insider">Insider</MenuItem></LinkContainer>
          <LinkContainer to="/arts"><MenuItem eventKey="arts">Arts</MenuItem></LinkContainer>
          <LinkContainer to="/books"><MenuItem eventKey="books">Books</MenuItem></LinkContainer>
          <LinkContainer to="/movies"><MenuItem eventKey="movies">Movies</MenuItem></LinkContainer>
          <LinkContainer to="/theater"><MenuItem eventKey="theater">Theater</MenuItem></LinkContainer>
          <LinkContainer to="/sundayreview"><MenuItem eventKey="sundayreview">Sunday Review</MenuItem></LinkContainer>
          <LinkContainer to="/fashion"><MenuItem eventKey="fashion">Fashion</MenuItem></LinkContainer>
          <LinkContainer to="/tmagazine"><MenuItem eventKey="tmagazine">T Magazine</MenuItem></LinkContainer>
          <LinkContainer to="/food"><MenuItem eventKey="food">Food</MenuItem></LinkContainer>
          <LinkContainer to="/travel"><MenuItem eventKey="travel">Travel</MenuItem></LinkContainer>
          <LinkContainer to="/magazine"><MenuItem eventKey="magazine">Magazine</MenuItem></LinkContainer>
          <LinkContainer to="/realestate"><MenuItem eventKey="realestate">Real Estate</MenuItem></LinkContainer>
          <LinkContainer to="/automobiles"><MenuItem eventKey="automobiles">Automobiles</MenuItem></LinkContainer>
          <LinkContainer to="/obituaries"><MenuItem eventKey="obituaries">Obituaries</MenuItem></LinkContainer>
        </NavDropdown>
      </Nav>
    );
  }
}

export default NavBar;
