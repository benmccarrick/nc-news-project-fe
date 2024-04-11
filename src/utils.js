import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-project-djbv.onrender.com",
});

export const getArticles = (topic, sortBy, orderBy) => {
  return ncNewsApi.get("/api/articles", {params: {topic: topic, sort_by: sortBy, order_by: orderBy}}).then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = (articleId) => {
  return ncNewsApi.get(`/api/articles/${articleId}`).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsByArticleId = (articleId, sortBy, orderBy) => {
  return ncNewsApi
    .get(`/api/articles/${articleId}/comments`, {params: {sort_by: sortBy, order_by: orderBy}})
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

export const patchCommentByCommentId = (commentId, patchBody) => {
  return ncNewsApi
    .patch(`/api/comments/${commentId}`, patchBody)
    .then(({ data }) => {
      return data.comment;
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

export const getUsers = () => {
  return ncNewsApi.get("/api/users").then(({ data }) => {
    return data.users;
  });
};

export const postArticle = (newArticle) => {
  return ncNewsApi.post("/api/articles", newArticle).then(({ data }) => {
    return data.articles;
  });
};

export const deleteArticleByArticleId = (articleId) => {
  return ncNewsApi.delete(`/api/articles/${articleId}`);
};

export const postTopic = (newTopic) => {
  return ncNewsApi.post("/api/topics", newTopic).then(({ data }) => {
    return data.topic;
  });
};