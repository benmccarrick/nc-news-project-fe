import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-project-djbv.onrender.com",
});

export const getArticles = () => {
  return ncNewsApi.get("/api/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = (articleId) => {
  return ncNewsApi.get(`/api/articles/${articleId}`).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsByArticleId = (articleId) => {
  return ncNewsApi
    .get(`/api/articles/${articleId}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
};

export const patchArticleByArticleId = (articleId, patchBody) => {
  return ncNewsApi
    .patch(`/api/articles/${articleId}`, patchBody)
    .then(({ data }) => {
      return data.article;
    });
};

export const postCommentByArticleId = (articleId, newComment) => {
  return ncNewsApi
    .post(`/api/articles/${articleId}/comments`, newComment)
    .then(({ data }) => {
      return data.comments;
    });
};

export const deleteCommentByCommentId = (commentId) => {
  return ncNewsApi.delete(`/api/comments/${commentId}`);
};

export const getTopics = () => {
  return ncNewsApi.get("/api/topics").then(({ data }) => {
    return data.topics;
  });
};
