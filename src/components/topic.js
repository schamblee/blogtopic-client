import React, { Component } from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';
import './topic.css'

export default class Topic extends Component {
    //formats topic sections
    render() {
        let topic = this.props.topic
        return (
          <div >
            <Link className="topic-link" to= {`/topic/blogs/${topic.id}`}>{topic.topicName}</Link>
            <p className="create-date">Created: {moment(topic.created).format('MMM DD YYYY')}</p> 
          </div>
          );
    }
}