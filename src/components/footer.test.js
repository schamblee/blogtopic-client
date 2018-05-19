import React from 'react';
import { shallow, mount } from 'enzyme';
import { Route, withRouter, MemoryRouter } from 'react-router-dom';
import Footer from './footer';

describe('<Footer />', () => {
    it('Renders without crashing', () => {
        shallow(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>);
    });
});