import React, { useEffect, useState } from "react";
import { getArticles } from "../utils";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import { useSearchParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import OrderFilter from "./OrderFilter";
import ArticleSortFilter from "./ArticleSortFilter";

const ArticleList = () => {
  const [currentArticles, setCurrentArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [err, setErr] = useState(null);

  const sortByQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order_by");
  const topicQuery = searchParams.get("topic");

  useEffect(() => {
    setIsLoading(true);
    getArticles(topicQuery, sortByQuery, orderQuery)
      .then((allArticles) => {
        setCurrentArticles(allArticles);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr({ err });
      });
  }, [topicQuery, sortByQuery, orderQuery]);

  if (err) {
    return <ErrorPage message={"topic does not exist"} />;
  }

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <ArticleSortFilter/>
      <OrderFilter/>
      {currentArticles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </div>
  );
};

export default ArticleList;
