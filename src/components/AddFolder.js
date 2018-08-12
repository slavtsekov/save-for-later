import React from 'react';
import { connect } from 'react-redux';
import { addFolder } from '../actions/folders';

export class AddFolder extends React.Component {
    state = {
        error: undefined
    };

    addFolder = (e) => {
        e.preventDefault();

        const folderName = e.target.elements.folder.value.trim();
        if (!folderName) {
            this.setState(() => ({
                error: 'Please provide folder name.'
            }));
        } else {
            this.setState(() => ({
                error: undefined
            }));

            this.props.addFolder(folderName);
            e.target.elements.folder.value = '';
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form
                    onSubmit={this.addFolder}
                >
                    <input type="text" name="folder" />
                    <button type="submit">Add Folder</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addFolder: (folder) => { dispatch(addFolder(folder)); }
});

export default connect(undefined, mapDispatchToProps)(AddFolder);
