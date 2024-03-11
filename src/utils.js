import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-project-djbv.onrender.com",
});

export const getArticles = () => {
  return ncNewsApi.get("/api/articles").then(({data}) => {
    return data.articles;
  });
};

export const getArticleById = (articleId) => {
  return ncNewsApi.get(`/api/articles/${articleId}`).then(({data}) => {
    return data.article;
  });
};