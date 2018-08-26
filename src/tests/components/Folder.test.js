import React from 'react';
import { shallow } from 'enzyme';

import { Folder } from '../../components/Folder';
import folders from '../fixtures/folders';

test('should render Folder correctly', () => {
    const wrapper = shallow(<Folder data={folders[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should call removeFolder when button is clicked', () => {
    const removeFolderMock = jest.fn();
    const wrapper = shallow(<Folder data={folders[1]} removeFolder={removeFolderMock} />);

    wrapper.find('button').simulate('click');

    expect(removeFolderMock).toHaveBeenLastCalledWith(folders[1].id);
});
