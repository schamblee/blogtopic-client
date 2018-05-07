import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchTopics} from '../actions/topics';
import requiresLogin from './requires-login';
import Topic from './topic'
import Filter from './filter'
import moment from 'moment'


export class TopicsList extends Component {
      componentDidMount() {
          console.log(this.props)
          this.props.dispatch(fetchTopics());
      }


      render() {
        let topics
        if (this.props.topics && this.props.topics.length) {
            topics = this.props.topics.map((topic, index) => (
            <Topic topic={topic} index={index }/>     
          ))
        }


    return (
    <div className="topics-list">
       <section>
         {this.props.topics && this.props.topics.length ? topics : ''}
       </section>
    </div>
    );
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
      username: state.auth.currentUser.username,
      name: `${currentUser.firstName}`,
      topics: state.topic.topics
  };
};

export default requiresLogin()(connect(mapStateToProps)(TopicsList));