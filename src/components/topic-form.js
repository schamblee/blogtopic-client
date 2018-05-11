import React from 'react'
import { Field, focus, resetForm, reduxForm } from 'redux-form'
import { newTopic, fetchTopics } from '../actions/topics';
import './topic-form.css'
import Input from './input';
import {Link, Redirect} from 'react-router-dom';


export class TopicForm extends React.Component {
    onSubmit(values) {
        const {topicName} = values;
        const topic = topicName;
        return this.props
        .dispatch(newTopic(topic))
        
    }

    render() {
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="topicName">Add a Topic</label>
                <Field
                    component={Input}
                    type="topicName"
                    name="topicName"
                />
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>    
            </form>   
        );
    }
}

export default reduxForm({
    form: 'topic',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('topic', Object.keys(errors)[0]))
})(TopicForm);