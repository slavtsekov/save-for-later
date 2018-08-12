import folderActions from '../actions/actionTypes';

const foldersReducerDefaultState = [];

const foldersReducer = (state = foldersReducerDefaultState, action) => {
    switch (action.type) {
        case folderActions.add:
            return [...state, action.folder];
        case folderActions.remove:
            return state.filter((folder) => folder.id !== action.id);
        case folderActions.edit:
            return state.map((folder) => {
                if (folder.id === action.id) {
                    return {
                        id: action.id,
                        folder: action.folder
                    };
                }
                return folder;
            });
        case folderActions.set:
            return action.folders;
        default:
            return state;
    }
};

export { foldersReducer as default };
