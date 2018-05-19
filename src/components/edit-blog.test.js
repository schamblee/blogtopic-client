import React from 'react';
import { shallow, mount } from 'enzyme';
import { Route, withRouter, MemoryRouter } from 'react-router-dom';
import EditBlog from './edit-blog';

describe('<EditBlog />', () => {
    it('Renders without crashing', () => {
        shallow(
            <MemoryRouter>
                <EditBlog />
            </MemoryRouter>);
    });
});