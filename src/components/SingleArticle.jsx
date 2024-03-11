import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../utils';
import Comments from './Comments';
import Loading from './Loading';

const SingleArticle = () => {

    const {article_id} = useParams();
    const [displayedArticle, setDisplayedArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getArticleById(article_id).then((article) => {
            setDisplayedArticle(article);
            setIsLoading(false);
        })
    }, [])

    return isLoading ? <Loading/> : (
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