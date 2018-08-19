import React from 'react';
import { shallow } from 'enzyme';
import { AddFolder } from '../../components/AddFolder';

test('should render AddFolder correctly', () => {
    const wrapper = shallow(<AddFolder />);
    expect(wrapper).toMatchSnapshot();
});

test('should dispatch to store if folder value is provided', () => {
    const value = 'Books';
    const addFolderSpy = jest.fn();
    const wrapper = shallow(<AddFolder addFolder={addFolderSpy} />);

    wrapper.find('form').simulate('submit', {
        preventDefault: () => {},
        target: {
            elements: {
                folder: {
                    value
                }
            }
        }
    });

    expect(addFolderSpy).toHaveBeenLastCalledWith(value);
    expect(wrapper.state('error')).toBeUndefined();
});

test('should not dispatch to store if folder value is not provided', () => {
    const value = '  ';
    const addFolderSpy = jest.fn();
    const wrapper = shallow(<AddFolder addFolder={addFolderSpy} />);

    wrapper.find('form').simulate('submit', {
        preventDefault: () => {},
        target: {
            elements: {
                folder: {
                    value
                }
            }
        }
    });

    expect(addFolderSpy).not.toHaveBeenCalled();
    expect(wrapper.state('error')).toBe('Please provide folder name.');
});
