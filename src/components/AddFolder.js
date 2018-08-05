import React from 'react';

class AddFolder extends React.Component {
    state = {
        error: undefined
    };

    addFolder = (e) => {
        e.preventDefault();

        const option = e.target.elements.folder.value.trim();
        console.log(option);
        e.target.elements.folder.value = '';
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

export { AddFolder as default };
