import React from 'react';
import { shallow } from 'enzyme';
import AddLinkPage from '../../components/AddLinkPage';

test('should render AddLinkPage', () => {
    const wrapper = shallow(<AddLinkPage />);
    expect(wrapper).toMatchSnapshot();
});
