import React, { Component } from 'react';

export default class Filter extends Component {
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