import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchBlogs} from '../actions/blogs';
import moment from 'moment';
import {Link} from 'react-router-dom';
import HeaderBar from './header-bar'
import './dashboard.css'

export class Dashboard extends React.Component {
    componentDidMount() {
        console.log(this.props)
        this.props.dispatch(fetchBlogs(this.props.username));
    }

    render() {
        let blogs

        if(this.props.blogs && this.props.blogs.length) {
            blogs = this.props.blogs.map((blog, index) => (
            <section key={index}>
                <Link className="blog-link" to= {`/blog/${blog.id}`}><h2>{blog.title}</h2></Link>
                <p>Created: {moment(blog.createDate).format('MMM DD YYYY')}</p> 
                <Link className="edit-blog-link" to={`/blog/edit/${blog.id}`}>Edit</Link>
            </section>
        ))
       }
       let noBlogsMessage = (
           <section>
               <span>You don't have any blogs yet.</span>
               <Link className="choose-topic-link" to='/topics'>Choose a Topic</Link>
           </section>
       )

        return (
            <div className="dashboard">
                <HeaderBar />
                <div className="dashboard-name">Welcome {this.props.name}</div>
                <div className="user-blogs">Your Blogs</div>
                { this.props.blogs && this.props.blogs.length ? blogs : 
                    noBlogsMessage }
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