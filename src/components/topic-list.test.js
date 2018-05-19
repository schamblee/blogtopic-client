import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import TopicList from './topics-list';

describe('<TopicList />', () => {
    it('Renders without crashing', () => {
        shallow(
            <MemoryRouter>
                <TopicList />
            </MemoryRouter>);
    });
});