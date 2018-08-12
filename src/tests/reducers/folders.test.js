import foldersReducer from '../../reducers/folders';
import { addFolder, removeFolder, editFolder, setFolders } from '../../actions/folders';
import folders from '../fixtures/folders';

test('should set default state', () => {
    const action = { type: '@@INIT' };

    const state = foldersReducer(undefined, action);

    expect(state).toEqual([]);
});

test('should add a folder', () => {
    const newFolder = { id: '4', folder: 'Test folder' };
    const action = addFolder(newFolder);

    const state = foldersReducer(folders, action);

    expect(state).toEqual([...folders, newFolder]);
});

test('should remove a folder by id', () => {
    const action = removeFolder(folders[1].id);

    const state = foldersReducer(folders, action);

    expect(state).toEqual([folders[0], folders[2]]);
});

test('should not remove a folder when id not found', () => {
    const action = removeFolder('0');

    const state = foldersReducer(folders, action);

    expect(state).toEqual(folders);
});

test('should edit a folder', () => {
    const { id } = folders[0];
    const folder = 'Music';
    const action = editFolder(id, folder);

    const state = foldersReducer(folders, action);

    expect(state[0]).toEqual({ id, folder });
});

test('should not edit a folder when id not found', () => {
    const action = editFolder('-2', 'Test folder');

    const state = foldersReducer(folders, action);

    expect(state).toEqual(folders);
});

test('should set folders', () => {
    const foldersToSet = [
        { id: 'folder8', folder: 'New Folder' },
        { id: 'folder9', folder: 'New Folder 1' }
    ];
    const action = setFolders(foldersToSet);

    const state = foldersReducer(folders, action);

    expect(state).toEqual(foldersToSet);
});
