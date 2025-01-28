import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'; 


function NavBar(){

    return(
        <Navbar expand="lg" className="custom-navbar">
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
        // <nav className="navBar">
        //     <img src={logo} className='logo' alt='logo'></img>
        //     <h2 className='nombre'>Coffee Rolls</h2>
        //     <Link to={'/'} className='link'>Home</Link>
        //     <Link to={'/promociones'} className='link'>Products</Link>
        //     <Link to={'/reseñas'} className='link'>Contact</Link>
        // </nav>
    )
};

export default NavBar