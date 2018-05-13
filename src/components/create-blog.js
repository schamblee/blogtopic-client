import React from 'react'
import { Field, focus, resetForm, reduxForm } from 'redux-form'
import { fetchTopic } from '../actions/topics';
import { newBlog  } from '../actions/blogs'
import './topic-form.css'
import Input from './input';
import Textarea from './textarea'
import {Link, Redirect} from 'react-router-dom';
import CreateBlogForm from './create-blog-form'
import requiresLogin from './requires-login'
import {connect} from 'react-redux'
import HeaderBar from './header-bar'

export class CreateBlog extends React.Component {
    componentDidMount() {
        const createBlogPath = this.props.location.pathname.split('/')
        this.props.dispatch(fetchTopic(createBlogPath[2]))
    }

    render() {
        console.log(this.props)
        let topic;
        let topicId;
        let username;
        if(this.props.currentTopic) {
            topicId = this.props.currentTopic.id
            topic =  <div>
            <h1>{this.props.currentTopic.topicName }</h1>
             </div>
        } 
        if(this.props.username) {
            username = this.props.username;
        }
        return (
            <div>
                <HeaderBar />
                {topic}
             <h1>Create a New Blog</h1>
             <CreateBlogForm topicId={topicId} 
              username={username} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        username: state.auth.currentUser.username,
        name: state.auth.currentUser.firstName,
        currentTopic: state.topic.currentTopic
    };
};

export default requiresLogin()(connect(mapStateToProps)(CreateBlog));