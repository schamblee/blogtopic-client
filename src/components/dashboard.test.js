import React from 'react';
import { shallow, mount } from 'enzyme';
import { Route, withRouter, MemoryRouter } from 'react-router-dom';
import Dashboard from './dashboard';

describe('<Dashboard />', () => {
    it('Renders without crashing', () => {
        shallow(
            <MemoryRouter>
                <Dashboard />
            </MemoryRouter>);
    });
});