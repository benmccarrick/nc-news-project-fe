import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
        <h1 className='header'>NC NEWS {" "} <img className="nc-logo" src='https://www.marketscreener.com/static/private-issuer-squared-BEI85.png'alt='the northcoders logo, a red circumflex symbol'/>{" "} <img className="nc-logo" src='https://www.marketscreener.com/static/private-issuer-squared-BEI85.png' alt='the northcoders logo, a red circumflex symbol'/>{" "} <img className="nc-logo" src='https://www.marketscreener.com/static/private-issuer-squared-BEI85.png' alt='the northcoders logo, a red circumflex symbol'/></h1>
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