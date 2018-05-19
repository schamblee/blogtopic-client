import React from 'react';
import { shallow, mount } from 'enzyme';
import { Route, withRouter, MemoryRouter } from 'react-router-dom';
import Blog from './blog';

describe('<Blog />', () => {
    it('Renders without crashing', () => {
        shallow(
            <MemoryRouter>
                <Blog />
            </MemoryRouter>);
    });
});