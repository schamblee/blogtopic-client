import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchBlog} from '../actions/blogs';
import {fetchTopic} from '../actions/topics';
import {Link} from 'react-router-dom';
import HeaderBar from './header-bar'
import './blog.css'

export class Blog extends React.Component {
    //blog component which displays saved blogs
    componentDidMount() {
        const blogPath = this.props.location.pathname.split('/')
        this.props.dispatch(fetchBlog(blogPath[2]));
        if(this.props.currentBlog && this.props.currentBlog.topicId) {  
            this.props.dispatch(fetchTopic(this.props.currentBlog.topicId))
        }
        
    }

    render() {
        //only display edit link if the current user is the onw who wrote the blog
        let editLink = ''
        if (this.props.username && this.props.currentBlog) {       
            if (this.props.username === this.props.currentBlog.username) {
                const blogId = this.props.currentBlog ? this.props.currentBlog.id : ''
                editLink = <Link className="edit-blog-link" to={`/blog/edit/${blogId}`}><button>Edit</button></Link>
            } 
        }

        let topic 
        if(this.props.currentTopic) {
            topic =  <section className="topic-header">
            <Link className="return" to={`/topic/blogs/${this.props.currentTopic.id}`}>Back to Topic</Link><br/>
            <h1 className="topic-name">{this.props.currentTopic.topicName }</h1>
             </section>
        } 
            
        return (
            <div className="topicBlogs">
            <HeaderBar />
            {topic}
            <div className="blog-body">
                <h1>{ this.props.currentBlog ? this.props.currentBlog.title  : ''}</h1>
                <p className="blog-content">{ this.props.currentBlog ? this.props.currentBlog.content  : ''}</p>
                {editLink}
            </div>
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