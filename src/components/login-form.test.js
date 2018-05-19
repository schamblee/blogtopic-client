import React from 'react';
import { shallow, mount } from 'enzyme';
import { Route, withRouter, MemoryRouter } from 'react-router-dom';
import LoginForm from './login-form';

describe('<LoginForm />', () => {
    it('Renders without crashing', () => {
        shallow(
            <MemoryRouter>
                <LoginForm />
            </MemoryRouter>);
    });
});