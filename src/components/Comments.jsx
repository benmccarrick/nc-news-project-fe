import React, { useContext, useEffect, useState } from "react";
import { getCommentsByArticleId } from "../utils";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";
import { UsersContext } from "../Contexts/UsersContext";

const Comments = () => {
  const [currentComments, setCurrentComments] = useState([]);
  const { article_id } = useParams();
  const {currentUsers} = useContext(UsersContext);

  useEffect(() => {
    getCommentsByArticleId(article_id).then((allComments) => {
      setCurrentComments(allComments);
    });
  }, []);

  return (
    <div>
      <CommentAdder
        setCurrentComments={setCurrentComments}
        currentUsers={currentUsers}
      />
      {currentComments.map((comment) => {
        return (
          <CommentCard
            key={comment.comment_id}
            comment={comment}
            currentUsers={currentUsers}
          />
        );
      })}
    </div>
  );
};

export default Comments;
