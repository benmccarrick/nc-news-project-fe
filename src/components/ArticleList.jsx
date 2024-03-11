import React, { useEffect, useState } from 'react';
import { getArticles } from '../utils';
import ArticleCard from './ArticleCard'

const ArticleList = () => {
    const [currentArticles, setCurrentArticles] = useState([]);

    useEffect(() => {
        getArticles().then((allArticles) => {
            setCurrentArticles(allArticles);
        })
    }, []);

    return (
        <div>
            {currentArticles.map((article) => {
                return <ArticleCard key={article.article_id} article={article}/>
            })}
        </div>
    );
};

export default ArticleList;