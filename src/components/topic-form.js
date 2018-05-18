import React from 'react'
import { Field, focus, reduxForm } from 'redux-form'
import { newTopic } from '../actions/topics';
import './topic-form.css'
import Input from './input';


export class TopicForm extends React.Component {
    //form used to submit a new topic
    onSubmit(values) {
        const {topicName} = values;
        const topic = topicName;
        return this.props
        .dispatch(newTopic(topic))
        
    }
    render() {
        let label = <label className="topic-label" htmlFor="topicName">Add a New Topic</label>
        return (
            <form
                className="topic-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <Field
                    label={label}
                    component={Input}
                    type="title"
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