import React from 'react';
import { shallow } from 'enzyme';
import FoldersPage from '../../components/FoldersPage';

test('should render DashboardPage', () => {
    const wrapper = shallow(<FoldersPage />);
    expect(wrapper).toMatchSnapshot();
});
