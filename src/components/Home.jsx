import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPotentials } from '../redux/potentialArticleSlice';
import { setDisplayArticle } from '../redux/displayArticleSlice';
import { useNavigate } from 'react-router-dom';
import './Home.css';


const Home = () => {

    const potentialArticles = useSelector(selectPotentials);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const selectArticleHandler = (article) => {
        dispatch(setDisplayArticle(article))
        navigate(`/details`)
    }

    // console.log(potentialArticles);

    const articleDisplay = potentialArticles.map(article => {
        return article.urlToImage ? (
            <div className='article-container'>
                <h1>{article.title}</h1>
                <img src={article.urlToImage} />
                <button onClick={() => selectArticleHandler(article)}>See more</button>
            </div>
        ) : null
    })

    return (
        <div>
            {potentialArticles.length === 0 ? 'There are no results for that search term' : articleDisplay}
        </div>
    )
}

export default Home