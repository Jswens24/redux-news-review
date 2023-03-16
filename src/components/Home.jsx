import React from 'react';
import { useSelector } from 'react-redux';
import { selectPotentials } from '../redux/potentialArticleSlice';
import './Home.css'

const Home = () => {

    const potentialArticles = useSelector(selectPotentials);

    // console.log(potentialArticles);

    const articleDisplay = potentialArticles.map(article => {
        return article.urlToImage ? (
            <div className='article-container'>
                <h1>{article.title}</h1>
                <img src={article.urlToImage} />
            </div>
        ) : null
    })

    return (
        <div>
            {articleDisplay}
        </div>
    )
}

export default Home