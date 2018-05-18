import React from 'react'
import { Field, focus, resetForm, reduxForm } from 'redux-form'
import { fetchTopic } from '../actions/topics';
import { fetchBlog  } from '../actions/blogs'
import './topic-form.css'
import Input from './input';
import Textarea from './textarea'
import {Link, Redirect} from 'react-router-dom';
import EditBlogForm from './edit-blog-form'
import requiresLogin from './requires-login'
import { connect } from 'react-redux'
import HeaderBar from './header-bar'
import './edit-blog.css'

export class EditBlog extends React.Component {
    componentDidMount() {
        console.log(this.props)
        const editBlogPath = this.props.location.pathname.split('/')
        this.props.dispatch(fetchBlog(editBlogPath[3]))
    }

    render() {
        console.log(this.props)
        let blog;
        let username;
        let content;
        let initialValues;
        let redirectToBlog;
        if(this.props.currentBlog) {
            initialValues = this.props.currentBlog;
            blog =  <div>
            <h1>{ this.props.currentBlog.title }</h1>
             </div>
        } 
        if(this.props.username) {
            username = this.props.username;
        }
        return (
            <div>
                <HeaderBar />
            <section className="topic-header">
                {blog}
             <h4>Edit Your Blog</h4>
             </section>
             <EditBlogForm initialValues={initialValues}
              username={username} redirectToBlog={redirectToBlog} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        username: state.auth.currentUser.username,
        name: state.auth.currentUser.firstName,
        currentBlog: state.blog.currentBlog,
        currentTopic: state.topic.currentTopic,
        redirectToBlog: state.blog.redirectToBlog
    };
};

export default requiresLogin()(connect(mapStateToProps)(EditBlog));