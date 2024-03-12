import React, { useState } from 'react';
import { postCommentByArticleId } from '../utils';
import { useParams } from 'react-router-dom';

const CommentAdder = ({setCurrentComments, currentComments}) => {
    const {article_id} = useParams();
    const [newComment, setNewComment] = useState("");
    const [usernameInput, setUsernameInput] = useState("");
    const [feedbackMessage, setFeedbackMessage] = useState(null);
    const [loadingPostedComment, setLoadingPostedComment] = useState(false);

    const handleUsername = (event) => {
        setUsernameInput(event.target.value);
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoadingPostedComment(true);
        const postNewComment = {username: usernameInput, body: newComment};
        postCommentByArticleId(article_id, postNewComment).then((newCommentFromApi) => {
            setNewComment("");
            setCurrentComments((currComments) => [newCommentFromApi, ...currComments]
            );
    
        })
        .then(() => {
            setFeedbackMessage("Comment successfully posted!");
            setLoadingPostedComment(false);
        })
        .catch(() => {
            setFeedbackMessage("Something went wrong, comment unsuccessfully posted");
            setLoadingPostedComment(false);
        })
    };

    return loadingPostedComment ? <p>Posting Comment...</p> : (
        <form className='CommentAdder' onSubmit={handleSubmit}>
            <label htmlFor='username'>Username: </label>
            <input
                id="username"
                type="text"
                required
                onChange={handleUsername}
                value={usernameInput}
            ></input>
            <label htmlFor='newComment'>Add a Comment: </label>
            <textarea
                id="newComment"
                type="text"
                multiline="true"
                required
                value={newComment}
                onChange={(event) => setNewComment(event.target.value)}
            ></textarea>
            <button type='submit'>Post New Comment</button>
            <p>{feedbackMessage}</p>
        </form>
    );
};

export default CommentAdder;