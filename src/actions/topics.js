import { API_BASE_URL } from '../config';
import { loadAuthToken } from '../local-storage';
import { SubmissionError } from 'redux-form'
import { push } from 'react-router-redux'

export const CREATE_TOPIC = 'CREATE_TOPIC'
export const createTopic = (topic) => ({
    type:'CREATE_TOPIC',
    newTopic: topic
})

export const CREATE_TOPIC_SUCCESS = 'CREATE_TOPIC_SUCCESS'
export const createTopicSuccess = (topic) => ({
    type:'CREATE_TOPIC_SUCCESS',
    newTopic: topic,
    redirectToTopic: true
})

export const CREATE_TOPIC_ERROR = 'CREATE_TOPIC_ERROR'
export const createTopicError = (error) => ({
    type:'CREATE_TOPIC_ERROR',
    error
})


export const FETCH_TOPIC_DATA = 'FETCH_TOPIC_DATA'
export const fetchTopicData = () => ({
    type:'FETCH_TOPIC_DATA',
})


export const FETCH_TOPIC_SUCCESS = 'FETCH_TOPIC_SUCCESS'
export const fetchTopicSuccess = (topic) => ({
    type:'FETCH_TOPIC_SUCCESS',
    topic: topic
})


export const FETCH_TOPIC_ERROR= 'FETCH_TOPIC_ERROR'
export const fetchTopicError = (error) => dispatch => ({
    type:'FETCH_TOPIC_ERROR',
    error

})

export const FETCH_TOPICS_DATA = 'FETCH_TOPICS_DATA'
export const fetchTopicsData = () => ({
    type:'FETCH_TOPICS_DATA',
})


export const FETCH_TOPICS_SUCCESS = 'FETCH_TOPICS_SUCCESS'
export const fetchTopicsSuccess = (topics) => ({
    type:'FETCH_TOPICS_SUCCESS',
    topics: topics
})


export const FETCH_TOPICS_ERROR= 'FETCH_TOPICS_ERROR'
export const fetchTopicsError = (error) => dispatch => ({
    type:'FETCH_TOPICS_ERROR',
    error
})

export const FILTER_TOPICS_DATA = 'FILTER_TOPICS_DATA'
export const filterTopicsData = () => ({
    type:'FILTER_TOPICS_DATA',
})


export const FILTER_TOPICS_SUCCESS = 'FILTER_TOPICS_SUCCESS'
export const filterTopicsSuccess = (topics) => ({
    type:'FILTER_TOPICS_SUCCESS',
    topics: topics
})


export const FILTER_TOPICS_ERROR= 'FILTER_TOPICS_ERROR'
export const filterTopicsError = (error) => dispatch => ({
    type:'FILTER_TOPICS_ERROR',
    error
})

export const UPDATE_TOPIC_REQUEST = 'UPDATE_TOPIC'
export const updateTopicRequest = (topic) => ({
    type:'UPDATE_TOPIC',
    newtopic: topic
})

export const UPDATE_TOPIC_SUCCESS = 'UPDATE_TOPIC_SUCCESS'
export const updateTopicSuccess = (topic) => ({
    type:'UPDATE_TOPIC_SUCCESS',
    newTopic: topic
})

export const UPDATE_TOPIC_ERROR = 'UPDATE_TOPIC_ERROR'
export const updateTopicError = (error) => ({
    type: UPDATE_TOPIC_ERROR,
    error
})

export const DELETE_TOPIC_REQUEST = 'DELETE_TOPIC_REQUEST'
export const deleteTopicRequest = (error) => ({
    type: DELETE_TOPIC_ERROR,
    error
})

export const DELETE_TOPIC_SUCCESS = 'DELETE_TOPIC_SUCCESS'
export const deleteTopicSuccess = (error) => ({
    type: DELETE_TOPIC_ERROR,
    error
})

export const DELETE_TOPIC_ERROR = 'DELETE_TOPIC_ERROR'
export const deleteTopicError = (error) => ({
    type: DELETE_TOPIC_ERROR,
    error
})


export const newTopic = (topicName) => dispatch => {
    const authToken = loadAuthToken();
    return fetch(`${API_BASE_URL}/topics`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${authToken}`
        },
        body: JSON.stringify({topicName})
    })
    .then(res => {
        if (!res.ok) {
          if (
            res.headers.has('content-type') &&
            res.headers.get('content-type').startsWith('application/json')
          ) {
            return res.json().then(err => Promise.reject(err));
          }
          return Promise.reject({
            code: res.status,
            message: res.statusText
          });
        }
        return res.json();
      })
      .then((json) => {
        return dispatch(createTopicSuccess(json))})
      .catch(err => {
            dispatch(createTopicError(err))
      })
    }

export const fetchTopic =(id)=>(dispatch, getState)=>{
    dispatch(fetchTopicData());
    const authToken = localStorage.getItem('authToken');
    fetch(`${API_BASE_URL}/topics/${id}`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(topic => dispatch(fetchTopicSuccess(topic)))
        .catch(err => dispatch(fetchTopicError(err))) 
}

export const fetchTopics = () => (dispatch, getState) => {
    dispatch(fetchTopicsData());
    const authToken = localStorage.getItem('authToken');
    fetch(`${API_BASE_URL}/topics/`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(topics => dispatch(fetchTopicsSuccess(topics)))
        .catch(err=> dispatch(fetchTopicsError(err)))
}

export const filterTopics = (filterName = '') => (dispatch, getState) => {
    dispatch(filterTopicsData());
    const authToken = localStorage.getItem('authToken');
    fetch(`${API_BASE_URL}/topics?filterName=${filterName}`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(topics => dispatch(filterTopicsSuccess(topics)))
        .catch(err=> dispatch(filterTopicsError(err)))
}


export const updateTopic = user => dispatch => {
    const authToken = loadAuthToken();
    return fetch(`${API_BASE_URL}/topics/${user.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${authToken}`
        },
        body: JSON.stringify(user)
    
    })
        .then(res => res.json())
            .then(response=> {
            const id = response.id;
            window.location = `/topics/${id}`;
            return dispatch(updateTopicRequest(response));
        })
        .catch(err => {
            dispatch(updateTopicError(err))
        });
};


export const deleteTopic = user => dispatch => {
     const authToken = loadAuthToken();
     return fetch(`${API_BASE_URL}/topics/${user.id}`, {
         method: 'DELETE',
         headers: {
             'Content-Type': 'application/json',
             'Authorization' : `Bearer ${authToken}`
         },
     })
     .then(res => {
         if (!res.ok) {
           return Promise.reject(res.status);
         }
         return dispatch(deleteTopicRequest());
       });
     };