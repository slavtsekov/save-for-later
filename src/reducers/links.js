import { linkActions } from '../actions/actionTypes';

const linksReducerDefaultState = [];

const linksReducer = (state = linksReducerDefaultState, action) => {
    switch (action.type) {
        case linkActions.add:
            return [...state, action.link];
        default:
            return state;
    }
};

export { linksReducer as default };
