// cardsSlice.js contains the logic for managing a list of cards in Redux.
import { createSlice } from "@reduxjs/toolkit";

// Create the cards slice
export const cardsSlice = createSlice({
    name: 'cardsSlice', 
    initialState: {
        cards: {}, // will hold all cards keyed by id
    }, 
    reducers: {
        addCard(state, action) {
            state.cards[action.payload.id] = {
                ...action.payload, 
                id: action.payload.id, 
                front: action.payload.front,
                back: action.payload.back,
            },
        },
    },
}); 

// export actions, selectors, and reducer from the slice
// include a selector to return a card with a given ID
export const selectCards = (id) => (state) => state.cards.cards[id];
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;