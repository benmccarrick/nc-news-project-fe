import React from 'react';

const ErrorPage = ({message}) => {
    return (
        <div className='error-page'>
            <br></br>
            <h1 className='error-header'>ERROR!</h1>
            <p className="message"> Oops! This {message}</p>
            <br></br>
            <img src='https://st.depositphotos.com/1006899/2650/i/450/depositphotos_26505551-stock-photo-error-metaphor.jpg' alt='four blank white figurines attempting to hold up five blocks of each letter of the word error, with one figurine laid on the floor with the final letter R on top of it'/>
        </div>
    );
};

export default ErrorPage;