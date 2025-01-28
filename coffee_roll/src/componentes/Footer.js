import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'; 


function Footer(){

    return(
        <Navbar expand="lg" className="custom-footer"  variant="dark">
        <Container>
          <Navbar.Brand href="#home">Coffee Rolls</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/promociones">Products</Nav.Link>
            <Nav.Link as={Link} to="/reseñas">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
          </Navbar>
    )
};

export default Footer