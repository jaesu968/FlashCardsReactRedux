// topicsSlice.js 
import { createSlice } from '@reduxjs/toolkit';
import { addQuiz } from '../quizzes/quizzesSlice'; 

// initial state consisting of an object that includes one propety called "topics" 
// which corresponds to an empty object, the inner topics object will 
// eventually hold all topics keyed by id 

//Has an addTopic action. 
// You can expect the payload for this action to look like
//  {id: '123456', name: 'name of topic', icon: 'icon url'}. 
// Store these values in the state as a new topic object.

// Each topic object added to the state should also have a quizIds property,
//  which will correspond to an array containing
//  the ids of each quiz associated with the topic. 
// When a topic is first created, 
// it won’t have any associated quizzes,
//  but you should still create an empty quizIds array so 
// that all topics in the state conform to the same shape.


export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {},
    },
    reducers: {
        // action reducer functions for adding a topic
        addTopic(state, action) {
            state.topics[action.payload.id] = {
                ...action.payload, 
                id: action.payload.id, 
                name: action.payload.name, 
                icon: action.payload.icon, 
                quizIds: [],
            }
        },
    },
    extraReducers: {
       // listen to the addQuiz action from quizzesSlice
       // and update the corresponding topic's quizIds array
        [addQuiz]: (state, action) => {
            if(state.topics[action.payload.topicId]) {
                state.topics[action.payload.topicId].quizIds.push(action.payload.id);
            }
        }
    }
})

export const selectTopics = (state) => state.topics.topics; 

export const { addTopic } = topicsSlice.actions; 
export default topicsSlice.reducer;
