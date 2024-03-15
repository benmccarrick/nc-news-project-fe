import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Link to="/">
        <h1 className='header'><img className="nc-logo" src='images/nc-logo.png' alt='the northcoders logo, a red circumflex symbol'/>  NC NEWS  <img className="nc-logo" src='images/nc-logo.png'alt='the northcoders logo, a red circumflex symbol'/></h1>
            </Link>
        <nav className='nav-bar'>
            <Link className='nav-bar-link' to="/">Home</Link>
            <Link className='nav-bar-link' to="/articles">Articles</Link>
            <Link className='nav-bar-link' to="/topics">Topics</Link>
            <Link className='nav-bar-link' to="/articles/post">Add Article</Link>
        </nav>
        </div>
    );
};

export default Header;