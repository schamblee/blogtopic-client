import React, { Component } from 'react';
import moment from 'moment';

export default class Topic extends Component {
    render() {
        let topic = this.props.topic
        let index = this.props.index
        return (
          <div key={index}>
            <h2>{topic.topicName}</h2>
            <p>Last Blog: {moment(topic.created).format('MMM DD YYYY')}</p> 
          </div>
          );
    }
}