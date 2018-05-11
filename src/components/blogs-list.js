import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchTopicBlogs} from '../actions/blogs';
import moment from 'moment';

export class BlogsList extends React.Component {
    componentDidMount() {
        console.log(this.props)
        this.props.dispatch(fetchTopicBlogs(this.props.currenTopic));
    }

    render() {
         const blogs = this.props.blogs.map((blog, index) => (
            <div key={index}>
                <h2>{blog.title}</h2>
                <h2>{moment(blog.createDate).format('MMM DD YYYY')}</h2> 
                <p>{blog.content}</p>
            </div>
        ))
        return (
            <div className="topicBlogs">
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