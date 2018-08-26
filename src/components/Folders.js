import React from 'react';
import { connect } from 'react-redux';

import Folder from './Folder';

export const Folders = (props) => (
    <div>
        <div>
            <h3>Your Folders</h3>
        </div>
        {props.folders.length === 0 && <p>You have no folders at the moment.</p>}
        {
            props.folders.map((folder, index) => (
                <Folder
                    key={folder.id}
                    data={folder}
                />
            ))
        }
    </div>
);

const mapStateToProps = (state) => ({
    folders: state.folders
});

export default connect(mapStateToProps)(Folders);
