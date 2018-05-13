import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchBlog} from '../actions/blogs';
import {fetchTopic} from '../actions/topics';
import moment from 'moment';
import {Link} from 'react-router-dom';
import HeaderBar from './header-bar'

export class Blog extends React.Component {
    componentDidMount() {
        const blogPath = this.props.location.pathname.split('/')
        this.props.dispatch(fetchBlog(blogPath[2]));
        if(this.props.currentBlog && this.props.currentBlog.topicId) {  
            this.props.dispatch(fetchTopic(this.props.currentBlog.topicId))
        }
        
    }

    render() {
        let editLink = ''
        if (this.props.username && this.props.currentBlog) {       
            if (this.props.username === this.props.currentBlog.username) {
                const blogId = this.props.currentBlog ? this.props.currentBlog.id : ''
                editLink = <Link className="edit-blog-link" to={`/blog/edit/${blogId}`}>Edit</Link>
            } 
        }
            
        return (
            <div className="topicBlogs">
            <HeaderBar />
                <h1>{ this.props.currentTopic ? this.props.currentTopic.topicName  : ''}</h1>
                <h1>{ this.props.currentBlog ? this.props.currentBlog.title  : ''}</h1>
                <p>{ this.props.currentBlog ? this.props.currentBlog.content  : ''}</p>
                {editLink}
            </div>
        ); 
    
  }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName}`,
        currentBlog: state.blog.currentBlog,
        currentTopic: state.topic.currentTopic
    };
};

export default requiresLogin()(connect(mapStateToProps)(Blog));