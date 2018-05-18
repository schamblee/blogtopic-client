import React from 'react'
import { fetchBlog  } from '../actions/blogs'
import './topic-form.css'
import EditBlogForm from './edit-blog-form'
import requiresLogin from './requires-login'
import { connect } from 'react-redux'
import HeaderBar from './header-bar'
import './edit-blog.css'

export class EditBlog extends React.Component {
    componentDidMount() {
        const editBlogPath = this.props.location.pathname.split('/')
        this.props.dispatch(fetchBlog(editBlogPath[3]))
        //used to get current blog data
    }

    render() {
        let blog;
        let username;
        let initialValues;
        //passes initial values to edit-blog-form.js
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