import React from 'react'
import { fetchTopic } from '../actions/topics';
import './topic-form.css'
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
        let topic;
        let topicId;
        let username;
        if(this.props.currentTopic) {
            topicId = this.props.currentTopic.id
            topic =  <div>
            <h2>Topic: {this.props.currentTopic.topicName }</h2>
             </div>
        } 
        if(this.props.username) {
            username = this.props.username;
        }
        return (
            <div>
                <HeaderBar />
            <section className="topic-header">
                {topic}
                <h1>Create a New Blog</h1>
             </section>
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