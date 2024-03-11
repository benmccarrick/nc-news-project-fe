import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../utils';
import Comments from './Comments';

const SingleArticle = () => {

    const {article_id} = useParams()
    const [displayedArticle, setDisplayedArticle] = useState({})

    useEffect(() => {
        getArticleById(article_id).then((article) => {
            setDisplayedArticle(article)
        })
    }, [])

    return (
        <div>
            <div className='single-article'>
            <h1>Title: {displayedArticle.title}</h1>
            <p>Author: {displayedArticle.author}</p>
            <p>Topic: {displayedArticle.topic}</p>
            <p>{displayedArticle.body}</p>
            <p>Votes: {displayedArticle.votes}</p>
            <p>Total Comments: {displayedArticle.comment_count}</p>
            </div>
            <div className='comment-section'>
                <p>Comments:</p>
            <Comments />
            </div>
        </div>
    );
};

export default SingleArticle;