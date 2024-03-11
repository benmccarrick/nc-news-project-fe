import React, { useEffect, useState } from 'react';
import { getCommentsByArticleId } from '../utils';
import { useParams } from 'react-router-dom';
import CommentCard from './CommentCard';

const Comments = () => {
    const [currentComments, setCurrentComments] = useState([]);
    const {article_id} = useParams()

    useEffect(() => {
        getCommentsByArticleId(article_id).then((allComments) => {
            setCurrentComments(allComments);
        })
    }, [])

    return (
        <div>
            {currentComments.map((comment) => {
                return <CommentCard key={comment.comment_id} comment={comment}/>
            })}
        </div>
    );
};

export default Comments;