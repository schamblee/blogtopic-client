import React from 'react';
import { shallow, mount } from 'enzyme';
import { Route, withRouter, MemoryRouter } from 'react-router-dom';
import CallToAction from './call-to-action';

describe('<CallToAction />', () => {
    it('Renders without crashing', () => {
        shallow(
            <MemoryRouter>
                <CallToAction />
            </MemoryRouter>);
    });
});