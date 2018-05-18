import { API_BASE_URL } from '../config';
import { loadAuthToken } from '../local-storage';

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
    topic
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


export const newTopic = (topicName) => dispatch => {
    //create a new topic
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
    //used to get the topic name in all of the blog pages
    dispatch(fetchTopicData());
    const authToken = localStorage.getItem('authToken');
    fetch(`${API_BASE_URL}/topics/topic/${id}`, {
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
    //retrieves all topics
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