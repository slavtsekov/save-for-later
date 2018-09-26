import React from 'react';
import { shallow } from 'enzyme';
import LinkForm from '../../components/LinkForm';

test('should render LinkForm correctly', () => {
    const wrapper = shallow(<LinkForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should set title on input change', () => {
    const wrapper = shallow(<LinkForm />);
    const value = 'Hot News';

    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });

    expect(wrapper.state('title')).toBe(value);
});

test('should set url on input change', () => {
    const wrapper = shallow(<LinkForm />);
    const value = 'http://test.te';

    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });

    expect(wrapper.state('url')).toBe(value);
});

test('should set description on input change', () => {
    const wrapper = shallow(<LinkForm />);
    const value = 'Check this later';

    wrapper.find('textarea').simulate('change', {
        target: { value }
    });

    expect(wrapper.state('description')).toBe(value);
});

test('should set folder on select change', () => {
    const wrapper = shallow(<LinkForm />);
    const value = 'Movies';

    wrapper.find('select').simulate('change', {
        target: { value }
    });

    expect(wrapper.state('folder')).toBe(value);
});
