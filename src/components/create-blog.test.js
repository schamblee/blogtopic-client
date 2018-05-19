import React from 'react';
import { shallow, mount } from 'enzyme';
import { Route, withRouter, MemoryRouter } from 'react-router-dom';
import CreateBlog from './create-blog';

describe('<CreateBlog />', () => {
    it('Renders without crashing', () => {
        shallow(
            <MemoryRouter>
                <CreateBlog />
            </MemoryRouter>);
    });
});