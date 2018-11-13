import React from 'react';
import { shallow } from 'enzyme';
import EditLinkPage from '../../components/EditLinkPage';

test('should render DashboardPage', () => {
    const wrapper = shallow(<EditLinkPage />);
    expect(wrapper).toMatchSnapshot();
});


test('should redirect to home page on submit', () => {
    const historyMock = { push: jest.fn() };
    const wrapper = shallow(<EditLinkPage history={historyMock} />);

    wrapper.find('LinkForm').prop('onSubmit')();

    expect(historyMock.push).toHaveBeenLastCalledWith('/');
});
