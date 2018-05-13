import{
    CREATE_BLOG_SUCCESS,
    CREATE_BLOG,
    CREATE_BLOG_ERROR,
    FETCH_BLOG_DATA,
    FETCH_BLOG_SUCCESS,
    FETCH_BLOG_ERROR,
    FETCH_BLOGS_DATA,
    FETCH_BLOGS_SUCCESS,
    FETCH_BLOGS_ERROR,
    FETCH_TOPIC_BLOGS_DATA,
    FETCH_TOPIC_BLOGS_SUCCESS,
    FETCH_TOPIC_BLOGS_ERROR,
    UPDATE_BLOG_REQUEST,
    UPDATE_BLOG_SUCCESS,
    UPDATE_BLOG_ERROR
    } from '../actions/blogs';
    
    
    const initialState = {
        blogs: [],
        currentBlog: null,
        loading: false,
        error: null,
        currentTopic: null
    }
    
    export const blogReducer = (state = initialState, action) => {
        if(action.type === CREATE_BLOG_SUCCESS) {
            return Object.assign({}, state, {
                blogs: [...state.blogs, action.blog]
            })
        }
        else if(action.type === CREATE_BLOG) {
            return Object.assign({}, state, {
                loading: true 
            })
        }
        else if(action.type === CREATE_BLOG_ERROR) {
            return Object.assign({}, state,{
                loading: false,
                error: action.error
            })
        }
        else if(action.type === FETCH_BLOG_DATA) {
            return Object.assign({}, state, {
                loading: true
            })
        }
        else if(action.type === FETCH_BLOG_SUCCESS){
            return Object.assign({}, state,{
                currentBlog: action.blog,
                loading: false
           }) 
        }   
        else if(action.type === FETCH_BLOG_ERROR){
            return Object.assign({}, state,{
                loading: false,
                error: action.error
            })
        }  
        else if(action.type === FETCH_TOPIC_BLOGS_DATA) {
            return Object.assign({}, state, {
                loading: true
            })
        }
        else if(action.type === FETCH_TOPIC_BLOGS_SUCCESS){
            return Object.assign({}, state,{
                blogs: action.blogs,
                loading: false
           }) 
        }   
        else if(action.type === FETCH_TOPIC_BLOGS_ERROR){
            return Object.assign({}, state,{
                loading: false,
                error: action.error
            })
        }  
        else if(action.type === FETCH_BLOGS_DATA) {
            return Object.assign({}, state, {
                loading: true
            })
        }
        else if(action.type === FETCH_BLOGS_SUCCESS){
            return Object.assign({}, state,{
                blogs: action.blogs,
                loading: false
           }) 
        }   
        else if(action.type === FETCH_BLOGS_ERROR){
            return Object.assign({}, state,{
                loading: false,
                error: action.error
            })
        }   
        else if(action.type === UPDATE_BLOG_REQUEST) {
            return Object.assign({}, state, {
                loading: true
            })
        }
        else if(action.type === UPDATE_BLOG_SUCCESS){
            return Object.assign({}, state,{
                blogs: action.blogs,
                loading: false
           }) 
        }   
        else if(action.type === UPDATE_BLOG_ERROR){
            return Object.assign({}, state,{
                loading: false,
                error: action.error
            })
        }   
        return state
    
    }