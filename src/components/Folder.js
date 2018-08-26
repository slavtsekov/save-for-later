import React from 'react';
import { connect } from 'react-redux';

import { removeFolder } from '../actions/folders';

export const Folder = (props) => (
    <div>
        <p>{props.data.name}</p>
        <button
            type="button"
            onClick={() => {
                props.removeFolder(props.data.id);
            }}
        >
            Remove
        </button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    removeFolder: (id) => dispatch(removeFolder(id))
});

export default connect(undefined, mapDispatchToProps)(Folder);
