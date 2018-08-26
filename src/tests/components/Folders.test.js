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
