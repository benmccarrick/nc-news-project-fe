import React, { useState } from "react";
import { deleteCommentByCommentId } from "../utils";

const CommentCard = ({ comment, currentUsers }) => {
  const [feedbackMessage, setFeedbackMessage] = useState(null);
  const [loadingDeletedMessage, setLoadingDeletedMessage] = useState(false);
  const correctUser = comment.author === currentUsers;

  const deleteComment = (comment_id) => {
    setLoadingDeletedMessage(true);
    deleteCommentByCommentId(comment_id)
      .then(() => {
        setFeedbackMessage("Comment successfully deleted!");
        setLoadingDeletedMessage(false);
      })
      .catch(() => {
        setFeedbackMessage(
          "Something went wrong, comment unsuccessfully deleted"
        );
        setLoadingDeletedMessage(false);
      });
  };

  return loadingDeletedMessage ? (
    <p>Deleting Comment...</p>
  ) : (
    <div className="comment-card">
      <p>Comment By: {comment.author}</p>
      <p>{comment.body}</p>
      <p>Votes: {comment.votes}</p>
      {correctUser && (
      <button
        onClick={() => {
          deleteComment(comment.comment_id);
        }}
      >
        Delete Comment
      </button>
      )}
      <p>{feedbackMessage}</p>
    </div>
  );
};

export default CommentCard;
