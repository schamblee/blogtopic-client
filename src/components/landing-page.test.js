import React from 'react';
import { shallow, mount } from 'enzyme';
import { Route, withRouter, MemoryRouter } from 'react-router-dom';
import LandingPage from './landing-page';

describe('<LandingPage />', () => {
    it('Renders without crashing', () => {
        shallow(
            <MemoryRouter>
                <LandingPage />
            </MemoryRouter>);
    });
});