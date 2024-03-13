import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const ArticleCard = ({article}) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const topicQuery = searchParams.get('topic');

    if(topicQuery && article.topic !== topicQuery) {
        return (
            null
        );
    }
    return (
        <div className='article-card'>
            <Link className='link-style' to={`/articles/${article.article_id}`}>
            <p>Title: {article.title}</p>
            <img className= 'article-img' src={article.article_img_url}/>
            <p>Author: {article.author}</p>
            <p>Topic: {article.topic}</p>
            <p>Votes: {article.votes}</p>
            <p>Total Comments: {article.comment_count}</p>
            <br></br>
            <p>Click the article for more info!</p>
            </Link>
        </div>
    );
};

export default ArticleCard;