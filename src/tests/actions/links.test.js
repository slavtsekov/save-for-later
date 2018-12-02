import { addLink, editLink } from '../../actions/links';
import links from '../fixtures/links';
import { linkActions } from '../../actions/actionTypes';

test('should setup add link action object', () => {
    const linkData = links[0];
    delete linkData.id;

    const action = addLink(linkData);

    const expected = {
        type: linkActions.add,
        link: {
            id: expect.any(String),
            ...linkData
        }
    };
    expect(action).toEqual(expected);
});

test('should setup edit link action object', () => {
    const link = links[0];
    delete link.id;
    const id = 'link1';

    const action = editLink(id, link);

    const expected = {
        type: linkActions.edit,
        id,
        link
    };
    expect(action).toEqual(expected);
});
