import React from 'react';
import { shallow, mount } from 'enzyme';
import { Route, withRouter, MemoryRouter } from 'react-router-dom';
import Textarea from './textarea';

describe('<Textarea />', () => {
    it('Renders without crashing', () => {
        shallow(
            <MemoryRouter>
                <Textarea />
            </MemoryRouter>);
    });
});