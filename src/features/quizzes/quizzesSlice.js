// quizzesSlice.js 
import { createSlice } from '@reduxjs/toolkit';

// create the quizzes slice

// initial state consisting of one object that includes one property 'quizzes' which is an empty object
// that empty object will eventually hold all quizzes keyed by their ids
// also has an addQuiz action reducer function called addQuiz() that takes in two arguments - state and action. 
// The action will receive a payload of the form { id: '123', name: 'quiz name', topicId: '456, cardIds: ['1','2','3'] }
// this will also have a selector to get all quizzes
// Export the actions, selectors, and reducer from the slice 
// make sure to import this to the store.js and add it to the configureStore reducer object

export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: {},// will hold all quizzes keyed by id
  },
    reducers: {
        addQuiz(state, action) {
            state.quizzes[action.payload.id] = {
                ...action.payload, 
                id: action.payload.id,
                name: action.payload.name,
                topicId: action.payload.topicId,
                cardIds: action.payload.cardIds,
            }
          },
    },
});

// export actions, selectors, and reducer from the slice
export const selectQuizzes = (state) => state.quizzes.quizzes; 
export const { addQuiz } = quizzesSlice.actions;


export default quizzesSlice.reducer;