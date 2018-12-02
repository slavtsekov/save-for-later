import uuid from 'uuid';
import { linkActions } from './actionTypes';

const addLink = (data) => ({
    type: linkActions.add,
    link: {
        id: uuid(),
        ...data
    }
});

const editLink = (id, link) => ({
    type: linkActions.edit,
    id,
    link
});

export { addLink, editLink };
