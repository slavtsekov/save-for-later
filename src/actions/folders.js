import folderActions from './actionTypes';

const addFolder = (folder) => ({
    type: folderActions.add,
    folder
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
