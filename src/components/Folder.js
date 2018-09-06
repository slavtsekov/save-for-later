import React from 'react';
import { connect } from 'react-redux';

import { removeFolder } from '../actions/folders';

export class Folder extends React.Component {
    state = {
        editMode: false,
        folderName: this.props.data.name,
        error: undefined
    };

    onFolderNameChange = (e) => {
        const folderName = e.target.value;
        this.setState(() => ({
            folderName
        }));
    }

    editFolder = () => {
        this.setState((prevState) => ({
            editMode: true
        }));
    };

    saveFolder = () => {
        const folderName = this.state.folderName.trim();
        if (folderName) {
            this.props.editFolder();
            this.setState(() => ({
                editMode: false,
                error: undefined
            }));
        } else {
            this.setState(() => ({
                error: 'Please provide folder name.'
            }));
        }
    };

    removeFolder = () => {
        this.props.removeFolder(this.props.data.id);
    };

    render() {
        return (
            <div>
                {
                    this.state.editMode ? (
                        <div>
                            {this.state.error && <p>{this.state.error}</p>}
                            <input
                                type="text"
                                value={this.state.folderName}
                                onChange={this.onFolderNameChange}
                            />
                        </div>
                    ) : (
                        <p>{this.props.data.name}</p>
                    )
                }
                {this.state.editMode ? (
                    <button type="button" onClick={this.saveFolder}>Save</button>
                ) : (
                    <button type="button" onClick={this.editFolder}>Edit</button>
                )}
                <button
                    type="button"
                    onClick={this.removeFolder}
                >
                    Remove
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeFolder: (id) => dispatch(removeFolder(id))
});

export default connect(undefined, mapDispatchToProps)(Folder);
