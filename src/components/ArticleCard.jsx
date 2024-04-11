import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteArticleByArticleId } from '../utils';
import { UsersContext } from '../Contexts/UsersContext';

const ArticleCard = ({article, currentArticles, setCurrentArticles}) => {
    const [feedbackMessage, setFeedbackMessage] = useState(null);
    const [loadingDeletedMessage, setLoadingDeletedMessage] = useState(false);
    const {currentUsers} = useContext(UsersContext);
    const correctUser = article.author === currentUsers.username;

    const deleteArticle = (article_id) => {
        setLoadingDeletedMessage(true);
        setTimeout(() => setLoadingDeletedMessage(false), 1000);
        setFeedbackMessage("Article successfully deleted!");
        deleteArticleByArticleId(article_id)
        .then(() => {
          const newArticles = currentArticles.filter((articles) => {
            return articles.articles_id !== article_id
          });
          setCurrentArticles(newArticles)
          })
          .catch(() => {
            setTimeout(() => setLoadingDeletedMessage(false), 1000);
            setFeedbackMessage(
              "Something went wrong, article unsuccessfully deleted"
            );
          });
      };

      if(loadingDeletedMessage){
        return <p>Deleting Article...</p>
      }
    

      return feedbackMessage ? <p>{feedbackMessage}</p> : (
        <div className='article-card'>
            <Link className='link-style' to={`/articles/${article.article_id}`}>
            <p>Title: {article.title}</p>
            <img className= 'article-img' src={article.article_img_url} alt='A depiction of the article title'/>
            <p>Author: {article.author}</p>
            <p>Topic: {article.topic}</p>
            <p>Votes: {article.votes}</p>
            <p>Total Comments: {article.comment_count}</p>
            <br></br>
            <p>Click the article for more info!</p>
            </Link>
            <br></br>
            {correctUser && (
             <button className='delete-comment-button'
             onClick={() => {
            deleteArticle(article.article_id);
        }}
      >
        Delete Article
      </button>
      )}
        </div>
    );
};

export default ArticleCard;