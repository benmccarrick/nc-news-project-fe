import React from 'react';

const ArticleCard = ({article}) => {
    return (
        <div className='article-card'>
            <p>Title: {article.title}</p>
            <img className= 'article-img'src={article.article_img_url}/>
            <p>Author: {article.author}</p>
            <p>Topic: {article.topic}</p>
            <p>Votes: {article.votes}</p>
        </div>
    );
};

export default ArticleCard;