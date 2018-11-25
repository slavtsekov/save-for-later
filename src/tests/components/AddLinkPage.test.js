import React from 'react';
import { shallow } from 'enzyme';
import { AddLinkPage } from '../../components/AddLinkPage';

test('should render AddLinkPage', () => {
    const wrapper = shallow(<AddLinkPage />);
    expect(wrapper).toMatchSnapshot();
});

test('should handle submit correctly', () => {
    const historyMock = { push: jest.fn() };
    const addLinkMock = jest.fn();
    const wrapper = shallow(<AddLinkPage history={historyMock} addLink={addLinkMock} />);
    const link = {
        title: 'Some link I found',
        url: 'www.somelink.com',
        description: 'Check later',
        folder: 'folder1'
    };

    wrapper.find('Connect(LinkForm)').prop('onSubmit')(link);

    expect(addLinkMock).toHaveBeenLastCalledWith(link);
    expect(historyMock.push).toHaveBeenLastCalledWith('/');
});
