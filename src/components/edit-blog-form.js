import React from 'react'
import { Field, focus, resetForm, reduxForm } from 'redux-form'
import { fetchTopic } from '../actions/topics';
import { updateBlog  } from '../actions/blogs'
import './topic-form.css'
import Input from './input';
import Textarea from './textarea'
import {Link, Redirect} from 'react-router-dom';

export class EditBlogForm extends React.Component {

    onSubmit(values) {
        const editBlogPath = this.props.location.pathname.split('/')
        const blogId = editBlogPath[2]
        const { title, content } = values;
        const blog = Object.assign({}, {blogId}, values);
            console.log(blog)
        return this.props
        .dispatch(updateBlog(blog))
    }

    render() {
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
                  <button
                    type="submit"
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
})(EditBlogForm);