import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchTopics} from '../actions/topics';
import requiresLogin from './requires-login';
import Topic from './topic'
import TopicForm from './topic-form'
import {Redirect} from 'react-router-dom';
import './topic-list.css'
import { HeaderBar } from './header-bar';

export class TopicsList extends Component {
      componentDidMount() {
          this.props.dispatch(fetchTopics());
      }
      render() {
      //redirect to new topic if user creates one
      let topics
      if (this.props.redirectToTopic) {
        let newTopicId = this.props.topics[this.props.topics.length - 1].id
          return (
              <div>
                <Redirect to={`/topic/blogs/${newTopicId}`} />
              </div>
          );
      };
      if(this.props.topics && this.props.topics.length) {
        topics = this.props.topics.map((topic, index) => (
        <Topic topic={topic} key={index} />     
        ));
    };

    return (
    <div className="topics-list">
    <HeaderBar />
    <section className="topic-header">
    <h2>Choose or Create a Topic</h2>
    </section>
      <TopicForm />
       <section>
         {topics}
       </section>
    </div>
    )
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
      username: state.auth.currentUser.username,
      name: `${currentUser.firstName}`,
      topics: state.topic.topics,
      redirectToTopic: state.topic.redirectToTopic
  };
};

export default requiresLogin()(connect(mapStateToProps)(TopicsList));