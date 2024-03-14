import React from 'react';

const ErrorPage = ({message}) => {
    return (
        <div className='error-page'>
            <p className="message"> Oops! This {message}</p>
        </div>
    );
};

export default ErrorPage;