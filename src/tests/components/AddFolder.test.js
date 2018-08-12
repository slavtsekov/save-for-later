import React from 'react';
import { shallow } from 'enzyme';
import { AddFolder } from '../../components/AddFolder';

test('should render AddFolder correctly', () => {
    const wrapper = shallow(<AddFolder />);
    expect(wrapper).toMatchSnapshot();
});
