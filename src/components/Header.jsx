import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
        <h1 className='header'>NC NEWS</h1>
        <nav className='nav-bar'>
            <Link className='nav-bar-link' to="/">Home </Link>
            <Link className='nav-bar-link' to="/articles">Articles </Link>
            <Link className='nav-bar-link' to="/topics">Topics </Link>
        </nav>
        </div>
    );
};

export default Header;