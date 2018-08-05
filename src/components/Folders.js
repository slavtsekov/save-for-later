import React from 'react';

import Folder from './Folder';

const Folders = (props) => {
    const folders = ['Folder 1', 'Folder 2'];
    const handleDeleteFolder = (folderName) => {
        console.log('Removed', folderName);
    };
    return (
        <div>
            <div>
                <h3>Your Folders</h3>
            </div>
            {folders.length === 0 && <p>You have no folders at the moment.</p>}
            {
                folders.map((folder, index) => (
                    <Folder
                        key={folder}
                        text={folder}
                        onDelete={handleDeleteFolder}
                    />
                ))
            }
        </div>
    );
};

export { Folders as default };
