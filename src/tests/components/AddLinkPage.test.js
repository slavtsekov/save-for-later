import React from 'react';
import { shallow } from 'enzyme';

import { AddLinkPage } from '../../components/AddLinkPage';
import links from '../fixtures/links';

test('should render AddLinkPage', () => {
    const wrapper = shallow(<AddLinkPage />);
    expect(wrapper).toMatchSnapshot();
});

test('should handle submit correctly', () => {
    const historyMock = { push: jest.fn() };
    const addLinkMock = jest.fn();
    const wrapper = shallow(<AddLinkPage history={historyMock} addLink={addLinkMock} />);
    const link = links[2];
    delete link.id;

    wrapper.find('Connect(LinkForm)').prop('onSubmit')(link);

    expect(addLinkMock).toHaveBeenLastCalledWith(link);
    expect(historyMock.push).toHaveBeenLastCalledWith('/');
});
