import React, { useEffect, useState } from 'react';
import { getArticles } from '../utils';
import ArticleCard from './ArticleCard'
import Loading from './Loading';

const ArticleList = () => {
    const [currentArticles, setCurrentArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        getArticles().then((allArticles) => {
            setCurrentArticles(allArticles);
            setIsLoading(false);
        })
    }, []);

    return isLoading ? <Loading/> : (
        <div>
            {currentArticles.map((article) => {
                return <ArticleCard key={article.article_id} article={article}/>
            })}
        </div>
    );
};

export default ArticleList;