import React from 'react'
import { Field, focus, resetForm, reduxForm } from 'redux-form'
import { fetchTopic } from '../actions/topics';
import { newBlog  } from '../actions/blogs'
import './topic-form.css'
import Input from './input';
import Textarea from './textarea'
import {Link, Redirect} from 'react-router-dom';

export class CreateBlog extends React.Component {

    onSubmit(values) {
        const username = this.props.username;
        const topicId = this.props.topicId;
        const { title, content } = values;
        const blog = Object.assign({}, {username, topicId}, values);
        return this.props
        .dispatch(newBlog(blog))
    }

    render() {
        let topic
        if(this.props.currentTopic) {
            topic =  <div>
            <h1>{this.props.currentTopic.topicName }</h1>
             </div>
        } 
        return (
            <div>
             <form
                className="blog-form"
                onSubmit={this.props.handleSubmit((values) =>
                    this.onSubmit(values)
                )}>
                <div>
                  <label htmlFor="title">Title</label>
                </div>
                <div>
                  <Field
                    component={Input}
                    type="text"
                    name="title"
                    required />
                </div>
                <div>
                  <label htmlFor="content">Blog Content</label>
                </div>
                <div>    
                  <Field
                    component={Textarea}
                    type="text"
                    name="content"
                     />
                </div>
                <div>
                  <button type="submit" 
                   disabled={this.props.pristine || this.props.submitting}>
                    Add Blog
                  </button>    
                </div>
            </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'blog',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('blog', Object.keys(errors)[0]))
})(CreateBlog);