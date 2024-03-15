import React, { useContext, useState } from "react";
import { UsersContext } from "../Contexts/UsersContext";
import { postArticle } from "../utils";

const ArticleAdder = () => {
  const { currentUsers } = useContext(UsersContext);

  const [titleInput, setTitleInput] = useState("");
  const [imgUrlInput, setImgUrlInput] = useState("");
  const [topicInput, setTopicInput] = useState("");
  const [bodyInput, setBodyInput] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [loadingPostedArticle, setLoadingPostedArticle] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoadingPostedArticle(true);
    const newArticle = {
      author: currentUsers.username,
      title: event.target["0"].value,
      article_img_url: event.target["1"].value,
      topic: event.target["2"].value,
      body: event.target["3"].value,
    };
    postArticle(newArticle)
      .then(() => {
        setFeedbackMessage(`Article successfully posted!`);
        setLoadingPostedArticle(false);
        setTitleInput("");
        setImgUrlInput("");
        setTopicInput("");
        setBodyInput("");
        setTimeout(() => setFeedbackMessage(null), 2000);
      })
      .catch(() => {
        setFeedbackMessage(`Something went wrong, article NOT posted!`);
        setLoadingPostedArticle(false);
        setTimeout(() => setFeedbackMessage(null), 2000);
      });
  };

  const updateTitleInputValue = (event) => {
    setTitleInput(event.target.value);
  };
  const updateUrlInputValue = (event) => {
    setImgUrlInput(event.target.value);
  };
  const updateTopicInputValue = (event) => {
    setTopicInput(event.target.value);
  };
  const updateBodyInputValue = (event) => {
    setBodyInput(event.target.value);
  };

  return loadingPostedArticle ? (
    <p>Posting Article...</p>
  ) : (
    <div className="post-article-div">
      <h1 className="post-an-article">Post an article!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <br></br>
        <input
          type="text"
          required
          className="article-text-box"
          id="title"
          onChange={updateTitleInputValue}
          value={titleInput}
        ></input>
        <br></br>
        <label htmlFor="article_img_url">Image URL for Article: </label>
        <br></br>
        <input
          type="url"
          required
          className="article-text-box"
          id="article_img_url"
          onChange={updateUrlInputValue}
          value={imgUrlInput}
        ></input>
        <br></br>
        <label htmlFor="topic">Topic: </label>
        <br></br>
        <input
          type="text"
          placeholder="Must be an existing topic"
          required
          className="article-text-box"
          id="topic"
          onChange={updateTopicInputValue}
          value={topicInput}
        ></input>
        <br></br>
        <label htmlFor="body">Body of text: </label>
        <br></br>
        <textarea
          type="text"
          required
          className="article-body-box"
          id="body"
          onChange={updateBodyInputValue}
          value={bodyInput}
        ></textarea>
        <br></br>
        <button className="post-article-button">Post Article</button>
        <p>{feedbackMessage}</p>
      </form>
    </div>
  );
};

export default ArticleAdder;
