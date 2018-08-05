import React from 'react';
import { shallow } from 'enzyme';
import Folder from '../../components/Folder';

test('should render Folder correctly', () => {
    const wrapper = shallow(<Folder />);
    expect(wrapper).toMatchSnapshot();
});
