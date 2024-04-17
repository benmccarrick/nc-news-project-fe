import React, { useState } from "react";
import { deleteCommentByCommentId, patchCommentByCommentId } from "../utils";

const CommentCard = ({ comment, currentUsers, currentComments, setCurrentComments }) => {
  const [feedbackMessage, setFeedbackMessage] = useState(null);
  const [loadingDeletedMessage, setLoadingDeletedMessage] = useState(false);
  const [hasVoted, setHasVoted] = useState(0);
  const [notification, setNotification] = useState(null);
  const correctUser = comment.author === currentUsers.username;
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
    setHasVoted((prevVote) => {
      const newVote = prevVote + voteChange;
      setNotification(newVote !== 0 ? "Thanks for voting!" : null);
      return newVote;
    });
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
      <p>{comment.body}</p>
      <p>User: {comment.author}</p>
      <p>Posted at: {comment.created_at.substring(11,16)}{"   "}{comment.created_at.substring(0, 10)}</p>
      <p>Votes: {comment.votes}</p><p className="voting-notification">{notification}</p>
      <button className='up-vote' onClick={() => hasVoted === 1
                  ? setNotification("You have already voted")
                  : handleVote(comment.comment_id, 1)}>↑ Up vote</button>
      <button className='down-vote' onClick={() => hasVoted === -1
                  ? setNotification("You have already voted")
                  : handleVote(comment.comment_id, -1)}>↓ Down vote</button>
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
