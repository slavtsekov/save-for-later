import { addLink } from '../../actions/links';
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
