import React, { useState } from "react";
import { deleteCommentByCommentId } from "../utils";

const CommentCard = ({ comment, currentUsers, currentComments, setCurrentComments }) => {
  const [feedbackMessage, setFeedbackMessage] = useState(null);
  const [loadingDeletedMessage, setLoadingDeletedMessage] = useState(false);
  const correctUser = comment.author === currentUsers;

  const deleteComment = (comment_id) => {
    setLoadingDeletedMessage(true);
    setTimeout(() => setLoadingDeletedMessage(false), 1000);
    setFeedbackMessage("Comment successfully deleted!");
    deleteCommentByCommentId(comment_id)
    .then(() => {
      const newComments = currentComments.filter((comments) => {
        return comments.comment_id !== comment_id
      });
      setCurrentComments(newComments)
      })
      .catch(() => {
        setTimeout(() => setLoadingDeletedMessage(false), 1000);
        setFeedbackMessage(
          "Something went wrong, comment unsuccessfully deleted"
        );
      });
  };

  if(loadingDeletedMessage){
    return <p>Deleting Comment...</p>
  }

  return feedbackMessage ? <p>{feedbackMessage}</p> : (
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
    </div>
  );
};

export default CommentCard;
