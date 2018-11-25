import React from 'react';
import { shallow } from 'enzyme';
import { LinkForm } from '../../components/LinkForm';
import folders from '../fixtures/folders';

let wrapper;
beforeEach(() => {
    wrapper = shallow(<LinkForm folders={folders} />);
});

test('should render LinkForm correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should set title on input change', () => {
    const value = 'Hot News';

    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });

    expect(wrapper.state('title')).toBe(value);
});

test('should set url on input change', () => {
    const value = 'http://test.te';

    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });

    expect(wrapper.state('url')).toBe(value);
});

test('should set description on input change', () => {
    const value = 'Check this later';

    wrapper.find('textarea').simulate('change', {
        target: { value }
    });

    expect(wrapper.state('description')).toBe(value);
});

test('should set folder on select change', () => {
    const value = 'Movies';

    wrapper.find('select').simulate('change', {
        target: { value }
    });

    expect(wrapper.state('folder')).toBe(value);
});

test('should render error for invalid form submission', () => {
    expect(wrapper).toMatchSnapshot();

    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });

    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should send data for valid form submission', () => {
    const onSumbitSpy = jest.fn();
    const linkData = {
        title: 'Something cool',
        url: 'http://cool.com',
        description: 'Just a cool link',
        folder: ''
    };
    wrapper = shallow(<LinkForm onSubmit={onSumbitSpy} link={linkData} folders={folders} />);

    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });

    expect(onSumbitSpy).toHaveBeenLastCalledWith(linkData);
});

test('should render error for invalid form url', () => {
    const onSumbitSpy = jest.fn();
    const linkData = {
        title: 'Something cool',
        url: 'test',
        description: 'Just a cool link',
        folder: ''
    };
    wrapper = shallow(<LinkForm onSubmit={onSumbitSpy} link={linkData} folders={folders} />);

    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });

    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(onSumbitSpy).not.toHaveBeenCalled();
});
