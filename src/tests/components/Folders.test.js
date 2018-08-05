import React from 'react';
import { shallow } from 'enzyme';
import Folders from '../../components/Folders';

test('should render Folders correctly', () => {
    const wrapper = shallow(<Folders />);
    expect(wrapper).toMatchSnapshot();
});
