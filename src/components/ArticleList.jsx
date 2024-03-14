import React, { useEffect, useState } from 'react';
import { getArticles } from '../utils';
import ArticleCard from './ArticleCard'
import Loading from './Loading';
import { useSearchParams } from 'react-router-dom';
import ErrorPage from './ErrorPage';

const ArticleList = () => {
    const [currentArticles, setCurrentArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const [err, setErr] = useState(null);

    const sortByQuery = searchParams.get('sort_by');
    const orderQuery = searchParams.get('order_by');
    const topicQuery = searchParams.get('topic');

    const setSortBy = (sort_by) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set('sort_by', sort_by)
        setSearchParams(newParams)
    }

    const setSortOrder = (order) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set('order_by', order);
        setSearchParams(newParams);
      };

    useEffect(() => {
        setIsLoading(true)
        getArticles(topicQuery, sortByQuery, orderQuery).then((allArticles) => {
            setCurrentArticles(allArticles);
            setIsLoading(false);
        }).catch((err) => {
            setErr({err});
        });
    }, [topicQuery, sortByQuery, orderQuery]);

    if(err) {
        return <ErrorPage message={'topic does not exist'}/>
    }

    return isLoading ? <Loading/> : (
        <div>
           <button onClick={() => setSortBy('created_at')}>Sort by Date</button>
           <button onClick={() => setSortBy('votes')}>Sort by Votes</button>
           <button onClick={() => setSortBy('comment_count')}>Sort by Comment Count</button>
           <button onClick={() => setSortOrder('ASC')}>Ascending</button>
           <button onClick={() => setSortOrder('DESC')}>Descending</button>
            {currentArticles.map((article) => {
                return <ArticleCard key={article.article_id} article={article}/>
            })}
        </div>
    );
};

export default ArticleList;