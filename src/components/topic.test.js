import React from 'react';
import { shallow, mount } from 'enzyme';
import { Route, withRouter, MemoryRouter } from 'react-router-dom';
import Topic from './topic';

describe('<Topic />', () => {
    it('Renders without crashing', () => {
        shallow(
            <MemoryRouter>
                <Topic />
            </MemoryRouter>);
    });
});