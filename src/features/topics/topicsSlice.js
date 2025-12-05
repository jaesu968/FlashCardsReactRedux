// topicsSlice.js 
import { createSlice } from '@reduxjs/toolkit';

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
        // reducer functions for adding and removing topics
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
})

export const selectTopics = (state) => state.topics.topics; 

export const { addTopic } = topicsSlice.actions; 
export default topicsSlice.reducer;
