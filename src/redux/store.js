import { configureStore } from "@reduxjs/toolkit";
import potentialArticleSlice from "./potentialArticleSlice";
import displayArticleSlice from "./displayArticleSlice";

export default configureStore({
    reducer: {
        potentialArticles: potentialArticleSlice,
        displayArticle: displayArticleSlice
    }
})