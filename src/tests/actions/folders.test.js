import { addFolder, removeFolder, editFolder, setFolders } from '../../actions/folders';
import folderActions from '../../actions/actionTypes';
import folders from '../fixtures/folders';

test('should setup add folder action object', () => {
    const name = 'Books';

    const action = addFolder(name);

    const expected = {
        type: folderActions.add,
        folder: {
            id: expect.any(String),
            name
        }
    };
    expect(action).toEqual(expected);
});

test('should setup remove folder action object', () => {
    const id = '123test';

    const action = removeFolder(id);

    const expected = {
        type: folderActions.remove,
        id
    };
    expect(action).toEqual(expected);
});

test('should setup edit folder action object', () => {
    const id = '123test456';
    const folder = 'Games';

    const action = editFolder(id, folder);

    const expected = {
        type: folderActions.edit,
        id,
        folder
    };
    expect(action).toEqual(expected);
});

test('should setup set folders action object', () => {
    const action = setFolders(folders);

    const expected = {
        type: folderActions.set,
        folders
    };
    expect(action).toEqual(expected);
});
