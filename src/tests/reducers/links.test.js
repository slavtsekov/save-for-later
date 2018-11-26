import linksReducer from '../../reducers/links';
import { addLink } from '../../actions/links';
import links from '../fixtures/links';

test('should set default state', () => {
    const action = { type: '@@INIT' };

    const state = linksReducer(undefined, action);

    expect(state).toEqual([]);
});

test('should add a link', () => {
    const linkData = links[2];
    delete linkData.id;
    const action = addLink(linkData);

    const state = linksReducer([links[0], links[1]], action);

    const newLink = {
        id: expect.any(String),
        ...linkData
    };
    expect(state).toEqual([links[0], links[1], newLink]);
});
