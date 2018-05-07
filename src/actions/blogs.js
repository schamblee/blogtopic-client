import { API_BASE_URL } from '../config';
import { loadAuthToken } from '../local-storage';


export const CREATE_BLOG = 'CREATE_BLOG'
export const createBlog = (blog) => ({
    type:'CREATE_BLOG',
    newBlog: blog
})

export const CREATE_BLOG_SUCCESS = 'CREATE_BLOG_SUCCESS'
export const createBlogSuccess = (blog) => ({
    type:'CREATE_BLOG_SUCCESS',
    newBlog: blog
})

export const CREATE_BLOG_ERROR = 'CREATE_BLOG_ERROR'
export const createBlogError = (error) => ({
    type:'CREATE_BLOG_ERROR',
    error
})


export const FETCH_BLOG_DATA = 'FETCH_BLOG_DATA'
export const fetchBlogData = () => ({
    type:'FETCH_BLOG_DATA',
})


export const FETCH_BLOG_SUCCESS = 'FETCH_BLOG_SUCCESS'
export const fetchBlogSuccess = (blog) => ({
    type:'FETCH_BLOG_SUCCESS',
    blog: blog
})


export const FETCH_BLOG_ERROR= 'FETCH_BLOG_ERROR'
export const fetchBlogError = (error) => dispatch => ({
    type:'FETCH_BLOG_ERROR',
    error

})

export const FETCH_BLOGS_DATA = 'FETCH_BLOGS_DATA'
export const fetchBlogsData = () => ({
    type:'FETCH_BLOGS_DATA',
})


export const FETCH_BLOGS_SUCCESS = 'FETCH_BLOGS_SUCCESS'
export const fetchBlogsSuccess = (blogs) => ({
    type:'FETCH_BLOGS_SUCCESS',
    blogs: blogs
})


export const FETCH_BLOGS_ERROR= 'FETCH_BLOGS_ERROR'
export const fetchBlogsError = (error) => dispatch => ({
    type:'FETCH_BLOGS_ERROR',
    error
})

export const UPDATE_BLOG_REQUEST = 'UPDATE_BLOG'
export const updateBlogRequest = (blog) => ({
    type:'UPDATE_BLOG',
    newBlog: blog
})

export const UPDATE_BLOG_SUCCESS = 'UPDATE_BLOG_SUCCESS'
export const updateBlogSuccess = (blog) => ({
    type:'UPDATE_BLOG_SUCCESS',
    newBlog: blog
})

export const UPDATE_BLOG_ERROR = 'UPDATE_BLOG_ERROR'
export const updateBlogError = (error) => ({
    type: UPDATE_BLOG_ERROR,
    error
})

export const DELETE_BLOG_REQUEST = 'DELETE_BLOG_REQUEST'
export const deleteBlogRequest = (error) => ({
    type: DELETE_BLOG_ERROR,
    error
})

export const DELETE_BLOG_SUCCESS = 'DELETE_BLOG_SUCCESS'
export const deleteBlogSuccess = (error) => ({
    type: DELETE_BLOG_ERROR,
    error
})

export const DELETE_BLOG_ERROR = 'DELETE_BLOG_ERROR'
export const deleteBlogError = (error) => ({
    type: DELETE_BLOG_ERROR,
    error
})


export const newBlog = user => dispatch => {
    const authToken = loadAuthToken();
    return fetch(`${API_BASE_URL}/blogs/${user.id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${authToken}`
        },
        body: JSON.stringify(user)
    
    })
        .then(res => res.json())
            .then(response=> {
            const id = response.id;
            window.location = `/blogs/${id}`;
            return dispatch(createBlog(response));
        })
        .catch(err => {
            dispatch(createBlogError(err))
        });
};

export const fetchBlog =(id)=>(dispatch, getState)=>{
    dispatch(fetchBlogData());
    const authToken = localStorage.getItem('authToken');
    fetch(`${API_BASE_URL}/blogs/${id}`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(Blog=> dispatch(fetchBlogSuccess(Blog)))
        .catch(err=> dispatch(fetchBlogError(err))) 
}

export const fetchBlogs = username => (dispatch, getState) => {
    dispatch(fetchBlogsData());
    const authToken = localStorage.getItem('authToken');
    fetch(`${API_BASE_URL}/blogs/${username}`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(blogs => dispatch(fetchBlogsSuccess(blogs)))
        .catch(err=> dispatch(fetchBlogsError(err)))
}


export const updateBlog = user => dispatch => {
    const authToken = loadAuthToken();
    return fetch(`${API_BASE_URL}/blogs/${user.id}`, {
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
            window.location = `/blogs/${id}`;
            return dispatch(updateBlogRequest(response));
        })
        .catch(err => {
            dispatch(updateBlogError(err))
        });
};


export const deleteBlog = user => dispatch => {
     const authToken = loadAuthToken();
     return fetch(`${API_BASE_URL}/blogs/${user.id}`, {
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
         return dispatch(deleteBlogRequest());
       });
     };