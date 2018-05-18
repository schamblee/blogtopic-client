import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchTopicBlogs} from '../actions/blogs';
import {fetchTopic} from '../actions/topics'
import moment from 'moment';
import {Link} from 'react-router-dom';
import HeaderBar from './header-bar'
import './blogs-list.css'

export class BlogsList extends React.Component {
    //displays all blogs in a topic
    componentDidMount() {
        const blogListPath = this.props.location.pathname.split('/')
        this.props.dispatch(fetchTopicBlogs(blogListPath[3]));
        this.props.dispatch(fetchTopic(blogListPath[3]))
    }

    render() {
        //displayed if there are no blogs yet
        let noBlogs = <section className="no-blogs-message">
                        There aren't any blogs on this topic yet.
                      </section>
        let blogs;
        //lists links to the blogs as well as their create date
        if(this.props.blogs && this.props.blogs.length) {
            blogs = this.props.blogs.map((blog, index) => (
            <section key={index}>
                <Link className="blog-link" to= {`/blog/${blog.id}`}><h2>{blog.title}</h2></Link>
                <p className="create-date">{moment(blog.createDate).format('MMM DD YYYY')}</p> 
            </section>
        ))}
        let topic 
        //displays the current topic of the blog list
        if(this.props.currentTopic) {
            topic =  <section className="topic-header">
            <Link className="return" to="/topics">Back to Topics</Link><br/>
            <h1 className="topic-name">{this.props.currentTopic.topicName }</h1>
             <Link className="add-blog-link" to={`/topic/${this.props.currentTopic.id}/blog/create`}><button>Add New Blog</button></Link>
             </section>
        } 
        return (
            <div className="topicBlogs">
            <HeaderBar />
                {topic}
                <div className="blog-section">
                { this.props.blogs && this.props.blogs.length ? blogs : noBlogs}
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
        blogs: state.blog.blogs,
        currentTopic: state.topic.currentTopic
    };
};

export default requiresLogin()(connect(mapStateToProps)(BlogsList));