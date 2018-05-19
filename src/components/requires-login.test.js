import React from 'react';
import { shallow, mount } from 'enzyme';
import { Route, withRouter, MemoryRouter } from 'react-router-dom';
import RequiresLogin from './requires-login';

describe('<RequiresLogin />', () => {
    it('Renders without crashing', () => {
        shallow(
            <MemoryRouter>
                <RequiresLogin />
            </MemoryRouter>);
    });
});