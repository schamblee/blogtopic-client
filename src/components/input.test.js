import React from 'react';
import { shallow, mount } from 'enzyme';
import { Route, withRouter, MemoryRouter } from 'react-router-dom';
import Input from './input';

describe('<Input />', () => {
    it('Renders without crashing', () => {
        shallow(
            <MemoryRouter>
                <Input />
            </MemoryRouter>);
    });
});