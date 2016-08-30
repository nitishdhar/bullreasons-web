import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav } from 'react-bootstrap/lib';
// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="app">
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Bull Reasons</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <li><Link to="/" activeClassName="active">Home</Link></li>
        <li><Link to="/reasons" activeClassName="active">Reasons</Link></li>
      </Nav>
    </Navbar>
    <div className="container">
      {props.children}
    </div>
    </div>
    );
}
