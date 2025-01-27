import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
import logo from '../img/logo.png'

function Navbar(){

    return(
        <nav className="navBar">
            <img src={logo} className='logo' alt='logo'></img>
            <h2 className='nombre'>Coffee Rolls</h2>
            <Link to={'/'} className='link'>Home</Link>
            <Link to={'/promociones'} className='link'>Products</Link>
            <Link to={'/reseñas'} className='link'>Contact</Link>
        </nav>
    )
};

export default Navbar