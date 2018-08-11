import React from 'react';
import { shallow } from 'enzyme';
import Folder from '../../components/Folder';

test('should render Folder correctly', () => {
    const wrapper = shallow(<Folder text="Default" />);
    expect(wrapper).toMatchSnapshot();
});

test('should call onDelete when button is clicked', () => {
    const onDeleteMock = jest.fn();
    const wrapper = shallow(<Folder text="Default" onDelete={onDeleteMock} />);

    wrapper.find('button').simulate('click');

    expect(onDeleteMock).toHaveBeenCalled();
});
