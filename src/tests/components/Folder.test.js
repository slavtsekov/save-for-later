import React from 'react';
import { shallow } from 'enzyme';

import { Folder } from '../../components/Folder';
import folders from '../fixtures/folders';

test('should render Folder correctly', () => {
    const wrapper = shallow(<Folder data={folders[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should call removeFolder when delete button is clicked', () => {
    const removeFolderMock = jest.fn();
    const wrapper = shallow(<Folder data={folders[1]} removeFolder={removeFolderMock} />);

    wrapper.find('button').at(1).simulate('click');

    expect(removeFolderMock).toHaveBeenLastCalledWith(folders[1].id);
});

test('should enable edit mode when edit button is clicked', () => {
    const wrapper = shallow(<Folder data={folders[1]} />);

    wrapper.find('button').at(0).simulate('click');

    expect(wrapper.state('editMode')).toBeTruthy();
});

test('should set folder name in state', () => {
    const value = 'Food';
    const wrapper = shallow(<Folder data={folders[0]} />);
    wrapper.find('button').at(0).simulate('click');

    wrapper.find('input').simulate('change', {
        target: { value }
    });

    expect(wrapper.state('folderName')).toBe(value);
});

test('should edit the folder name if folder name is valid', () => {
    const editFolderMock = jest.fn();
    const wrapper = shallow(<Folder data={folders[1]} editFolder={editFolderMock} />);
    wrapper.find('button').at(0).simulate('click');
    const value = 'Food';
    wrapper.find('input').simulate('change', {
        target: { value }
    });

    wrapper.find('button').at(0).simulate('click');

    expect(editFolderMock).toHaveBeenCalled();
    expect(wrapper.state('editMode')).toBeFalsy();
    expect(wrapper.state('error')).toBeUndefined();
});

test('should not edit the folder name if folder name is invalid', () => {
    const editFolderMock = jest.fn();
    const wrapper = shallow(<Folder data={folders[1]} editFolder={editFolderMock} />);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('input').simulate('change', {
        target: { value: '' }
    });

    wrapper.find('button').at(0).simulate('click');

    expect(editFolderMock).not.toHaveBeenCalled();
    expect(wrapper.state('editMode')).toBeTruthy();
    expect(wrapper.state('error')).toBe('Please provide folder name.');
});
