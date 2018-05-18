import React from 'react'
import { Field, focus, reduxForm } from 'redux-form'
import { newBlog  } from '../actions/blogs'
import './topic-form.css'
import Input from './input';
import Textarea from './textarea'

export class CreateBlogForm extends React.Component {
    //form used to post a blog
    onSubmit(values) {
        const username = this.props.username;
        const topicId = this.props.topicId;
        const blog = Object.assign({}, {username, topicId}, values);
        //the blog object is passed to the newBlog action to post the blog data
        return this.props
        .dispatch(newBlog(blog))
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
                    component={Textarea} /* future iteration could include editable div */ 
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
})(CreateBlogForm);