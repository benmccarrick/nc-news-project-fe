import React, { useState } from "react";
import { deleteCommentByCommentId, patchCommentByCommentId } from "../utils";
import { useParams } from "react-router-dom";

const CommentCard = ({ comment, currentUsers, currentComments, setCurrentComments }) => {
  const [feedbackMessage, setFeedbackMessage] = useState(null);
  const [loadingDeletedMessage, setLoadingDeletedMessage] = useState(false);
  const correctUser = comment.author === currentUsers;
  const [err, setErr] = useState(null);

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

  const handleVote = (comment_id, voteChange) => {
    setCurrentComments((currComments) => {
        const updatedComments = currComments.map((currComment) => {
          if (currComment.comment_id === comment_id){
            return {...currComment, votes: currComment.votes + voteChange};
          }
          return currComment;
        });
        return updatedComments;
    });
    setErr(null);
    patchCommentByCommentId(comment_id, {inc_votes: voteChange}).catch((err) => {
        setCurrentComments((currComments) => {
          const updatedComments = currComments.map((currComment) => {
            if (currComment.comment_id === comment_id){
              return {...currComment, votes: currComment.votes - voteChange};
            }
            return currComment;
          })
          return updatedComments;
        });
        setErr('Something went wrong, please try again.');
    });
};

if(err) {
  return <ErrorPage message={'comment does not exist'}/>
}

  if(loadingDeletedMessage){
    return <p>Deleting Comment...</p>
  }

  return feedbackMessage ? <p>{feedbackMessage}</p> : (
    <div className="comment-card">
      <p>Comment By: {comment.author}</p>
      <p>{comment.body}</p>
      <p>Votes: {comment.votes}</p>
      <button className='up-vote' onClick={() => handleVote(comment.comment_id, 1)}>↑ Up vote</button>
      <button className='down-vote' onClick={() => handleVote(comment.comment_id, -1)}>↓ Down vote</button>
      <br></br>
      {correctUser && (
      <button className='delete-comment-button'
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
