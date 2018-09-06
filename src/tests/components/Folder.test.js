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

// test('should call editFolder when edit button is clicked', () => {
//     const editFolderMock = jest.fn();
//     const wrapper = shallow(<Folder data={folders[1]} editFolder={editFolderMock} />);

//     wrapper.find('button').at(0).simulate('click');

//     expect(editFolderMock).toHaveBeenCalled();
// });
