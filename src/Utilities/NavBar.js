/*jshint esversion:6*/
import React from 'react';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class NavBar extends React.Component {

handleSelect(e) {
  this.props.updateCategory(e);
}

  render() {
    return (
      <Nav bsStyle="tabs" justified activeKey={this.props.category} onSelect={(e) => this.handleSelect(e)}>
        <NavItem eventKey="home" href="/">Top Stories</NavItem>
        <NavItem eventKey="world">World</NavItem>
        <NavItem eventKey="national">National</NavItem>
        <NavItem eventKey="politics">Politics</NavItem>
        <NavItem eventKey="business">Buisness</NavItem>
        <NavItem eventKey="technology">Technology</NavItem>
        <NavItem eventKey="sports">Sports</NavItem>
        <NavDropdown title="More" id="nav-dropdown">
          <MenuItem eventKey="opinion">Opinion</MenuItem>
          <MenuItem eventKey="upshot">Upshot</MenuItem>
          <MenuItem eventKey="nyregion">NY Region</MenuItem>
          <MenuItem eventKey="science">Science</MenuItem>
          <MenuItem eventKey="insider">Insider</MenuItem>
          <MenuItem eventKey="arts">Arts</MenuItem>
          <MenuItem eventKey="books">Books</MenuItem>
          <MenuItem eventKey="movies">Movies</MenuItem>
          <MenuItem eventKey="theater">Theater</MenuItem>
          <MenuItem eventKey="sundayreview">Sunday Review</MenuItem>
          <MenuItem eventKey="fashion">Fashion</MenuItem>
          <MenuItem eventKey="tmagazine">T Magazine</MenuItem>
          <MenuItem eventKey="food">Food</MenuItem>
          <MenuItem eventKey="travel">Travel</MenuItem>
          <MenuItem eventKey="magazine">Magazine</MenuItem>
          <MenuItem eventKey="realestate">Real Estate</MenuItem>
          <MenuItem eventKey="automobiles">Automobiles</MenuItem>
          <MenuItem eventKey="obituaries">Obituaries</MenuItem>
        </NavDropdown>
      </Nav>
    );
  }
}

export default NavBar;
