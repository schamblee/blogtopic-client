import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchBlogs} from '../actions/blogs';
import moment from 'moment';

export class Dashboard extends React.Component {
    componentDidMount() {
        console.log(this.props)
        this.props.dispatch(fetchBlogs(this.props.username));
    }

    render() {
        let blogs
        if (this.props.blogs && this.props.blogs.length) {
            blogs = this.props.blogs.map((blog, index) => (
            <div key={index}>
                <h2>{blog.title}</h2>
                <h2>{moment(blog.createDate).format('MMM DD YYYY')}</h2> 
                <p>{blog.content}</p>
            </div>
        ))
        }
        return (
            <div className="dashboard">
                <div className="dashboard-name">Welcome {this.props.name}</div>
                <div className="user-blogs">Your Blogs</div>
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
        blogs: state.blog.blogs
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));