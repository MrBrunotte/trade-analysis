import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './navBar.css';

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container fluid>
        <Navbar.Brand as={Link} to="/">My Trade Analysis Page</Navbar.Brand>
            <Nav className="ms-auto nav-style">

              <Nav.Link className="nav-link my-nav-link" as={Link} to="/">Home</Nav.Link>
              <Nav.Link className="nav-link my-nav-link" as={Link} to="/indices">Indices</Nav.Link>
              <Nav.Link className='nav-link my-nav-link' as={Link} to="/currency">Currency</Nav.Link>
              
            </Nav>
        </Container>
    </Navbar>  
    );
  }

  export default MyNavbar;