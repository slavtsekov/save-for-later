import uuid from 'uuid';
import folderActions from './actionTypes';

const addFolder = (name) => ({
    type: folderActions.add,
    folder: {
        id: uuid(),
        name
    }
});

const removeFolder = (id) => ({
    type: folderActions.remove,
    id
});

const editFolder = (id, name) => ({
    type: folderActions.edit,
    id,
    name
});

const setFolders = (folders) => ({
    type: folderActions.set,
    folders
});

export { addFolder, removeFolder, editFolder, setFolders };
