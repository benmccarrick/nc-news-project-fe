import React from 'react';

const CommentCard = ({comment}) => {
    return (
        <div className='comment-card'>
            <p>Comment By: {comment.author}</p>
            <p>{comment.body}</p>
            <p>Votes: {comment.votes}</p>
        </div>
    );
};

export default CommentCard;