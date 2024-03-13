import React, { useState } from "react";
import { postCommentByArticleId } from "../utils";
import { useParams } from "react-router-dom";

const CommentAdder = ({ setCurrentComments, currentUsers }) => {
  const { article_id } = useParams();
  const [newComment, setNewComment] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState(null);
  const [loadingPostedComment, setLoadingPostedComment] = useState(false);
    
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoadingPostedComment(true);
    const postNewComment = { username: currentUsers, body: newComment };
    postCommentByArticleId(article_id, postNewComment)
      .then((newCommentFromApi) => {
        setNewComment("");
        setCurrentComments((currComments) => [
          newCommentFromApi,
          ...currComments,
        ]);
      })
      .then(() => {
        setFeedbackMessage("Comment successfully posted!");
        setLoadingPostedComment(false);
        setTimeout(() => setFeedbackMessage(null), 2000);
      })
      .catch(() => {
        setFeedbackMessage(
          "Something went wrong, comment NOT posted!"
        );
        setLoadingPostedComment(false);
        setTimeout(() => setFeedbackMessage(null), 2000);
      });
  };

  return loadingPostedComment ? (
    <p>Posting Comment...</p>
  ) : (
    <form className="CommentAdder" onSubmit={handleSubmit}>
      <label htmlFor="newComment">Add a Comment: </label>
      <input
        id="newComment"
        type="text"
        multiline="true"
        required
        value={newComment}
        onChange={(event) => setNewComment(event.target.value)}
      ></input>
      <button type="submit">Post New Comment</button>
      <p>{feedbackMessage}</p>
    </form>
  );
};

export default CommentAdder;
