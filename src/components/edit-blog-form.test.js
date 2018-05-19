import React from 'react';
import { shallow, mount } from 'enzyme';
import { Route, withRouter, MemoryRouter } from 'react-router-dom';
import EditBlogForm from './edit-blog-form';

describe('<EditBlogForm />', () => {
    it('Renders without crashing', () => {
        shallow(
            <MemoryRouter>
                <EditBlogForm />
            </MemoryRouter>);
    });
});