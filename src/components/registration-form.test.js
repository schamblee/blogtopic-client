import React from 'react';
import { shallow, mount } from 'enzyme';
import { Route, withRouter, MemoryRouter } from 'react-router-dom';
import RegistrationForm from './registration-form';

describe('<RegistrationForm />', () => {
    it('Renders without crashing', () => {
        shallow(
            <MemoryRouter>
                <RegistrationForm />
            </MemoryRouter>);
    });
});