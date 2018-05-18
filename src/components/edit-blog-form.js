import React from 'react'
import { Field, focus, resetForm, reduxForm } from 'redux-form'
import { fetchTopic } from '../actions/topics';
import { updateBlog, fetchBlog  } from '../actions/blogs'
import './topic-form.css'
import Input from './input';
import Textarea from './textarea'
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'

export class EditBlogForm extends React.Component {

    componentDidMount() {
      //  const editBlogPath = this.props.location.pathname.split('/')
      //  const blogId = editBlogPath[3]
        console.log(this.props)
        let InitializeFromStateForm = props => {
        const { load } = props
        }
    }


    onSubmit(values) {
        console.log(this.props)
       // const editBlogPath = this.props.location.pathname.split('/')
        const blogId = this.props.initialValues.id
        const { title, content } = values;
        const blog = Object.assign({}, {blogId}, values);
            console.log(blog)
        return this.props
        .dispatch(updateBlog(blog))
        //window.location = `/blogs/${blogId}`;
    }

    render() {
        if (this.props.submitSucceeded === true ) {
            return (
                <div>
                  <Redirect to={`/blog/${this.props.initialValues.id}`} />
                </div>
            )
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
                  <button
                    type="submit">
                    Update Blog
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

EditBlogForm= connect(
    state => ({
      initialValues: state.blog // pull initial values from account reducer
    }),
    { load: fetchBlog } // bind account loading action creator
  )(EditBlogForm)