import React from 'react';
import { shallow, mount } from 'enzyme';
import { Route, withRouter, MemoryRouter } from 'react-router-dom';
import Nav from './nav';

describe('<Nav />', () => {
    it('Renders without crashing', () => {
        shallow(
            <MemoryRouter>
                <Nav />
            </MemoryRouter>);
    });
});