import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchTopicBlogs} from '../actions/blogs';
import {fetchTopic} from '../actions/topics'
import moment from 'moment';
import {Link} from 'react-router-dom';
import HeaderBar from './header-bar'
import './blog-list.css'

export class BlogsList extends React.Component {
    componentDidMount() {
        console.log(this.props)
        const blogListPath = this.props.location.pathname.split('/')
        this.props.dispatch(fetchTopicBlogs(blogListPath[3]));
        this.props.dispatch(fetchTopic(blogListPath[3]))
    }

    render() {
        let blogs;
        if(this.props.blogs && this.props.blogs.length) {
            blogs = this.props.blogs.map((blog, index) => (
            <section key={index}>
                <Link className="blog-link" to= {`/blog/${blog.id}`}><h2>{blog.title}</h2></Link>
                <p>{moment(blog.createDate).format('MMM DD YYYY')}</p> 
            </section>
        ))}
        let topic 
        if(this.props.currentTopic) {
            topic =  <section className="topic-header">
            <h1>{this.props.currentTopic.topicName }</h1>
             <Link to={`/topic/${this.props.currentTopic.id}/blog/create`}>Add New Blog</Link>
             </section>
        } 
        return (
            <div className="topicBlogs">
            <HeaderBar />
                {topic}
                { this.props.blogs && this.props.blogs.length ? blogs : ''}
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