import React from 'react';
import { shallow, mount } from 'enzyme';
import { Route, withRouter, MemoryRouter } from 'react-router-dom';
import BlogsList from './blogs-list';

describe('<BlogsList />', () => {
    it('Renders without crashing', () => {
        shallow(
            <MemoryRouter>
                <BlogsList />
            </MemoryRouter>);
    });
});