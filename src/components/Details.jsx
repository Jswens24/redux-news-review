import React from 'react';
import { selectDisplay } from '../redux/displayArticleSlice';
import { useSelector } from 'react-redux';

const Details = () => {

    const displayArticle = useSelector(selectDisplay)
    console.log(displayArticle);


    return (
        <div>
            <p>{displayArticle.title}</p>
            <img src={displayArticle.urlToImage} />
            <p>{displayArticle.content}</p>
            <a href={displayArticle.url} target='_blank'>See Full Article</a>
        </div>
    )
}

export default Details