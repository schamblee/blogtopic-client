import React from 'react';
import { shallow, mount } from 'enzyme';
import { Route, withRouter, MemoryRouter } from 'react-router-dom';
import TopicForm from './topic-form';

describe('<TopicForm />', () => {
    it('Renders without crashing', () => {
        shallow(
            <MemoryRouter>
                <TopicForm />
            </MemoryRouter>);
    });
});