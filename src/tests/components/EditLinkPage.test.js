import React from 'react';
import { shallow } from 'enzyme';
import EditLinkPage from '../../components/EditLinkPage';

test('should render DashboardPage', () => {
    const wrapper = shallow(<EditLinkPage />);
    expect(wrapper).toMatchSnapshot();
});
