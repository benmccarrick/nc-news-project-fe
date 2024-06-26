import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import { getTopics } from '../utils';
import TopicCard from './TopicCard';
import TopicAdder from './TopicAdder';

const TopicsList = () => {

    const [currentTopics, setCurrentTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        getTopics().then((allTopics) => {
            setCurrentTopics(allTopics);
            setIsLoading(false);
        })
    }, []);

    return isLoading ? <Loading/> :(
        <div>
            <h1 className='topic-header'>All Topics:</h1>
            {currentTopics.map((topic) => {
                return <TopicCard key={topic.slug} topic={topic}/>
            })}
            <TopicAdder setCurrentTopics={setCurrentTopics}/>
        </div>
    );
};

export default TopicsList;