import React, { Component } from 'react';

let fakeServerData = {
    topics: [{
        topicName: 'Web Development',
        blogs: [
        {
          title: 'Getting Started with React',
          author: 'Joshua Chamblee',
          content: 'Step 1: Use create-react-app in your console...',
          popularity: 100
        }],
    }, 
    {
        topicName: 'Food',
        blogs: [
        {
          title: 'Best Burger Recipe',
          author: 'Stephanie Chamblee',
          content: 'Step 1: Use create-react-app in your console...',
          popularity: 100
        }]
    }]
    }

class Filter extends Component {
    render() {
        return (
            <div>
              <h2>Search Topic:</h2>
              <input placeholder="Search a Topic" type="text" 
                onKeyUp={event => 
                this.props.onTextChange(event.target.value)} />
            </div>
          );
        }
      }

class Topic extends Component {
    render() {
        let topic = this.props.topic
        return (
            <div>
              <h2>{topic.topicName}</h2>
              <ul>
                {topic.blogs.map(blog =>
                  <li>{blog.title}</li>
                )}
              </ul>
            </div>
          );
    }
}

export default class TopicsList extends Component {
    constructor() {
        super();
        this.state = {
          serverData: {},
          filterString: ''
        }
      }
      componentDidMount() {
        setTimeout(() => {
          this.setState({serverData: fakeServerData});
        }, 1000);
      }
      render() {
        let topicsToRender = this.state.serverData.topics ?
        this.state.serverData.topics
        .filter(topic =>
          topic.topicName.toLowerCase().includes(
            this.state.filterString.toLowerCase())
        ) : []
    return (
    <div className="topics-list">

    { this.state.serverData.topics ?
       <section>
       <Filter onTextChange={text => {
            this.setState({filterString: text})
            }}/>
          {topicsToRender.map(topic =>
            <Topic topic={topic} /> 
          )}
     </section> : <h1>Loading...</h1>
    }
    </div>
    );
}
}