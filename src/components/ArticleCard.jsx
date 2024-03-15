import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({article}) => {

    return (
        <div className='article-card'>
            <Link className='link-style' to={`/articles/${article.article_id}`}>
            <p>Title: {article.title}</p>
            <img className= 'article-img' src={article.article_img_url} alt='A depiction of the article title'/>
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