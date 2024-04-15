import React, { useContext, useEffect, useState } from "react";
import { getCommentsByArticleId } from "../utils";
import { useParams, useSearchParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";
import { UsersContext } from "../Contexts/UsersContext";
import OrderFilter from "./OrderFilter";
import CommentSortFilter from "./CommentSortFilter";

const Comments = () => {
  const [currentComments, setCurrentComments] = useState([]);
  const { article_id } = useParams();
  const {currentUsers} = useContext(UsersContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const sortByQuery = searchParams.get('sort_by');
  const orderQuery = searchParams.get('order_by');

  useEffect(() => {
    getCommentsByArticleId(article_id, sortByQuery, orderQuery).then((allComments) => {
      setCurrentComments(allComments);
    });
  }, [sortByQuery, orderQuery]);

  return (currentComments.length) ? (
    <div>
      <CommentAdder
        setCurrentComments={setCurrentComments}
        currentUsers={currentUsers}
        />
        <p className="comment-text">Comments:</p>
      <CommentSortFilter/>
      <br></br>
      <OrderFilter/>
      
      {currentComments.map((comment) => {
        return (
          <CommentCard
            key={comment.comment_id}
            comment={comment}
            currentUsers={currentUsers}
            currentComments = {currentComments}
            setCurrentComments={setCurrentComments}
          />
        );
      })}
    </div>
  ) : ( 
  <div>
    <CommentAdder
      setCurrentComments={setCurrentComments}
      currentUsers={currentUsers}
      />
    <br></br>
    <p className="comment-text">No comments on this article</p>
    </div>
    );
};

export default Comments;
