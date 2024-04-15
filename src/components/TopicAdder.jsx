import React, { useState } from 'react';
import { postTopic } from '../utils';

const TopicAdder = ({setCurrentTopics}) => {
    const [topicInput, setTopicInput] = useState("");
    const [descriptionInput, setDescriptionInput] = useState("");
    const [feedbackMessage, setFeedbackMessage] = useState(null);
  const [loadingPostedTopic, setLoadingPostedTopic] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoadingPostedTopic(true);
    const newTopic = {
      slug: event.target["0"].value,
      description: event.target["1"].value
    };
    postTopic(newTopic)
      .then((newTopicFromApi) => {
        setTopicInput("");
        setDescriptionInput("");
        setCurrentTopics((currTopics) => [
            newTopicFromApi,
            ...currTopics
        ])
    })
        .then(() => {
            setFeedbackMessage(`Topic successfully added!`);
            setLoadingPostedTopic(false);
            setTimeout(() => setFeedbackMessage(null), 2000);
        })
      .catch(() => {
        setFeedbackMessage(`Something went wrong, topic NOT added!`);
        setLoadingPostedTopic(false);
        setTimeout(() => setFeedbackMessage(null), 2000);
      });
  };

  const updateTopicInputValue = (event) => {
    setTopicInput(event.target.value);
  };
  const updateDescriptionInputValue = (event) => {
    setDescriptionInput(event.target.value);
  };

    return loadingPostedTopic ? (
        <p>Adding Topic...</p>
      ) : (
        <form className="TopicAdder" onSubmit={handleSubmit}>
          <label htmlFor="article_img_url" className="form-labels">Topic: </label>
        <br></br>
        <input
          type="text"
          required
          className="article-text-box"
          id="article_img_url"
          onChange={updateTopicInputValue}
          value={topicInput}
        ></input>
        <br></br>
        <label htmlFor="topic" className="form-labels">Description: </label>
        <br></br>
        <input
          type="text"
          placeholder="Add description of topic here"
          required
          className="article-text-box"
          id="topic"
          onChange={updateDescriptionInputValue}
          value={descriptionInput}
        ></input>
        <br></br>
          <button type="submit" className="post-comment-button">Add New Topic</button>
          <p>{feedbackMessage}</p>
        </form>
      );
};

export default TopicAdder;