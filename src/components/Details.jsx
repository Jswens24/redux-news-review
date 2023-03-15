import React from 'react';
import { selectDisplay } from '../redux/displayArticleSlice';
import { useSelector } from 'react-redux';

const Details = () => {

    const displayArticle = useSelector(selectDisplay)
    console.log(displayArticle);


    return (
        <div>
            <p>{displayArticle.title}</p>
        </div>
    )
}

export default Details