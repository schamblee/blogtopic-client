import{
    CREATE_TOPIC_SUCCESS,
    CREATE_TOPIC,
    CREATE_TOPIC_ERROR,
    FETCH_TOPIC_DATA,
    FETCH_TOPIC_SUCCESS,
    FETCH_TOPIC_ERROR,
    FETCH_TOPICS_DATA,
    FETCH_TOPICS_SUCCESS,
    FETCH_TOPICS_ERROR
    } from '../actions/topics';
    
    
    const initialState = {
        topics: [],
        currentTopic: null,
        loading: false,
        error: null,
        redirectToTopic: false 
    }
    
    export const topicReducer = (state = initialState, action) => {
        if(action.type === CREATE_TOPIC_SUCCESS) {
            return Object.assign({}, state, {
                topics: [...state.topics, action.newTopic],
                redirectToTopic: true
            })
        }
        else if(action.type === CREATE_TOPIC) {
            return Object.assign({}, state, {
                loading: true 
            })
        }
        else if(action.type === CREATE_TOPIC_ERROR) {
            return Object.assign({}, state,{
                loading: false,
                error: action.error
            })
        }
        else if(action.type === FETCH_TOPIC_DATA) {
            return Object.assign({}, state, {
                loading: true
            })
        }
        else if(action.type === FETCH_TOPIC_SUCCESS){
            return Object.assign({}, state,{
                currentTopic: action.topic,
                loading: false
           }) 
        }   
        else if(action.type === FETCH_TOPIC_ERROR){
            return Object.assign({}, state,{
                loading: false,
                error: action.error
            })
        }    
        else if(action.type === FETCH_TOPICS_DATA) {
            return Object.assign({}, state, {
                loading: true
            })
        }
        else if(action.type === FETCH_TOPICS_SUCCESS){
            return Object.assign({}, state,{
                topics: action.topics,
                loading: false
           }) 
        }   
        else if(action.type === FETCH_TOPICS_ERROR){
            return Object.assign({}, state,{
                loading: false,
                error: action.error
            })
        }   
        return state
    
    }