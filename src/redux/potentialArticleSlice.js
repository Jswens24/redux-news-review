import { createSlice } from "@reduxjs/toolkit";

export const potentialArticleSlice = createSlice({
    name: 'potentialArticles',
    initialState: {
        value: [
            {
                title: 'This is the title of a news article'
            }
        ]
    },
    reducers: {
        setPotentialArticles: (state, action) => {
            state.value = action.payload
        },
        deletePotentialArticles: (state) => {
            state.value = null
        }
    }
})

export const { setPotentialArticles, deletePotentialArticles } = potentialArticleSlice.actions

export const selectPotentials = (state) => state.potentialArticles.value

export default potentialArticleSlice.reducer