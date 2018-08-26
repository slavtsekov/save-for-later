import React from 'react';
import { connect } from 'react-redux';

import Folder from './Folder';

export class Folders extends React.Component {
    state = {
        folders: ['Folder 1', 'Folder 2']
    };

    handleDeleteFolder = (folderName) => {
        this.setState((prevState) => {
            const folders = prevState.folders.filter(folder => folder !== folderName);
            return { folders };
        });
    };

    render() {
        return (
            <div>
                <div>
                    <h3>Your Folders</h3>
                </div>
                {this.props.folders.length === 0 && <p>You have no folders at the moment.</p>}
                {
                    this.props.folders.map((folder, index) => (
                        <Folder
                            key={folder}
                            text={folder}
                            onDelete={this.handleDeleteFolder}
                        />
                    ))
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    folders: state.folders
});

export default connect(mapStateToProps)(Folders);
