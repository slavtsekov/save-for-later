import uuid from 'uuid';
import { linkActions } from './actionTypes';

const addLink = (data) => ({
    type: linkActions.add,
    link: {
        id: uuid(),
        ...data
    }
});

export { addLink };
