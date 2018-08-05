import React from 'react';

const Folder = (props) => (
    <div>
        <p>{props.text}</p>
        <button
            type="button"
            onClick={(е) => {
                props.onDelete(props.text);
            }}
        >
            Remove
        </button>
    </div>
);

export { Folder as default };
