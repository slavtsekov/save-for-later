import React from 'react';
import { shallow } from 'enzyme';

import { EditLinkPage } from '../../components/EditLinkPage';
import links from '../fixtures/links';

let editedLink;
let editLinkMock;
let historyMock;
let wrapper;

beforeEach(() => {
    [, , editedLink] = links;
    editLinkMock = jest.fn();
    historyMock = { push: jest.fn() };
    wrapper = shallow(
        <EditLinkPage
            link={editedLink}
            editLink={editLinkMock}
            history={historyMock}
        />
    );
});

test('should render EditLinkPage', () => {
    expect(wrapper).toMatchSnapshot();
});


test('should handle submit correctly', () => {
    const updatedLink = { ...editedLink, description: '' };

    wrapper.find('Connect(LinkForm)').prop('onSubmit')(updatedLink);

    expect(editLinkMock).toHaveBeenLastCalledWith(editedLink.id, updatedLink);
    expect(historyMock.push).toHaveBeenLastCalledWith('/');
});
