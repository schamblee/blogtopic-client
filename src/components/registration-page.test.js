import React from 'react';
import { shallow, mount } from 'enzyme';
import { Route, withRouter, MemoryRouter } from 'react-router-dom';
import RegistrationPage from './registration-page';

describe('<RegistrationPage />', () => {
    it('Renders without crashing', () => {
        shallow(
            <MemoryRouter>
                <RegistrationPage />
            </MemoryRouter>);
    });
});