import { linkActions } from '../actions/actionTypes';

const linksReducerDefaultState = [];

const linksReducer = (state = linksReducerDefaultState, action) => {
    switch (action.type) {
        case linkActions.add:
            return [...state, action.link];
        case linkActions.edit:
            return state.map((link) => {
                if (link.id === action.id) {
                    return {
                        ...link,
                        ...action.link
                    };
                }

                return link;
            });
        default:
            return state;
    }
};

export { linksReducer as default };
