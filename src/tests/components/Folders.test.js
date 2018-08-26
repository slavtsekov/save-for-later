import React from 'react';
import { shallow } from 'enzyme';

import { Folders } from '../../components/Folders';
import folders from '../fixtures/folders';

test('should render Folders correctly with data', () => {
    const wrapper = shallow(<Folders folders={folders} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render Folders correctly without data', () => {
    const wrapper = shallow(<Folders folders={[]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should handle deleting of folder when delete action triggered', () => {
    const wrapper = shallow(<Folders folders={folders} />);
    const originalState = wrapper.state('folders');

    wrapper.find('Folder').at(0).prop('onDelete')(originalState[0]);

    const expectedState = originalState.filter(item => item !== originalState[0]);
    expect(wrapper.state('folders')).toEqual(expectedState);
});
