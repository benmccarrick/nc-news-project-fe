import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
        <h1 className='header'>NC NEWS</h1>
        <nav className='nav-bar'>
            <Link to="/">Home </Link>
            <Link to="/articles">Articles </Link>
        </nav>
        </div>
    );
};

export default Header;