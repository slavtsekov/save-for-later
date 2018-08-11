import React from 'react';

import Folder from './Folder';

class Folders extends React.Component {
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
                {this.state.folders.length === 0 && <p>You have no folders at the moment.</p>}
                {
                    this.state.folders.map((folder, index) => (
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

export { Folders as default };
