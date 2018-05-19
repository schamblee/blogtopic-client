import React from 'react';
import { shallow, mount } from 'enzyme';
import { Route, withRouter, MemoryRouter } from 'react-router-dom';
import HeaderBar from './header-bar';

describe('<HeaderBar />', () => {
    it('Renders without crashing', () => {
        shallow(
            <MemoryRouter>
                <HeaderBar />
            </MemoryRouter>);
    });
});