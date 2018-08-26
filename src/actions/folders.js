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

const editFolder = (id, folder) => ({
    type: folderActions.edit,
    id,
    folder
});

const setFolders = (folders) => ({
    type: folderActions.set,
    folders
});

export { addFolder, removeFolder, editFolder, setFolders };
