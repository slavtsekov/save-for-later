import React from 'react';
import { shallow } from 'enzyme';
import { AddLinkPage } from '../../components/AddLinkPage';

test('should render AddLinkPage', () => {
    const wrapper = shallow(<AddLinkPage />);
    expect(wrapper).toMatchSnapshot();
});

test('should redirect to home page on submit', () => {
    const historyMock = { push: jest.fn() };
    const addLinkMock = jest.fn();
    const wrapper = shallow(<AddLinkPage history={historyMock} addLink={addLinkMock} />);

    wrapper.find('LinkForm').prop('onSubmit')();

    expect(historyMock.push).toHaveBeenLastCalledWith('/');
});
