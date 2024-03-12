import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById, patchArticleByArticleId } from '../utils';
import Comments from './Comments';
import Loading from './Loading';

const SingleArticle = () => {

    const {article_id} = useParams();
    const [displayedArticle, setDisplayedArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getArticleById(article_id).then((article) => {
            setDisplayedArticle(article);
            setIsLoading(false);
        })
    }, [])

    const handleVote = (voteChange) => {
        setDisplayedArticle((article) => {
            return {...article, votes: article.votes + voteChange};
        });
        setErr(null);
        patchArticleByArticleId(article_id, {inc_votes: voteChange}).catch((err) => {
            setDisplayedArticle((article) => {
                return {...article, votes: article.votes - voteChange};
            });
            setErr('Something went wrong, please try again.');
        });
    };

    return isLoading ? <Loading/> : (
        <article>
            <div className='single-article'>
            <h1>Title: {displayedArticle.title}</h1>
            <p>Author: {displayedArticle.author}</p>
            <p>Topic: {displayedArticle.topic}</p>
            <p>{displayedArticle.body}</p>
            <p>Votes: {displayedArticle.votes}</p>
            <p>Total Comments: {displayedArticle.comment_count}</p>
            </div>
            <button onClick={() => handleVote(1)}>Up vote</button>
            <button onClick={() => handleVote(-1)}>Down vote</button>
            {err ? <p>{err}</p> : null}
            <div className='comment-section'>
                <p>Comments:</p>
            <Comments />
            </div>
        </article>
    );
};

export default SingleArticle;