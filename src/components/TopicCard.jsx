import React from 'react';
import { Link } from 'react-router-dom';

const TopicCard = ({topic}) => {
    return (
        <div className='article-card'>
            <Link className='link-style' to={`/articles?topic=${topic.slug}`}>
            <p>Topic: {topic.slug}</p>
            <p>Description: {topic.description}</p>
            <br></br>
            <p>Click the topic for articles on this subject!</p>
            </Link>
        </div>
    );
};

export default TopicCard;