import React from 'react';

class LinkForm extends React.Component {
    folders = [
        { id: 'folder1', name: 'Books' },
        { id: 'folder2', name: 'Games' },
        { id: 'folder3', name: 'Movies' }
    ];

    constructor(props) {
        super();

        this.state = {
            title: props.link ? props.link.title : '',
            url: props.link ? props.link.url : '',
            description: props.link ? props.link.description : '',
            folder: props.link ? props.link.folder : '',
            error: undefined
        };
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        const urlRegEx = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;
        if (!this.state.title || !this.state.url || !urlRegEx.test(this.state.url)) {
            this.setState(() => ({
                error: 'Please provide title and valid URL!'
            }));
        } else {
            this.setState(() => ({
                error: undefined
            }));

            this.props.onSubmit({
                title: this.state.title,
                url: this.state.url,
                description: this.state.description,
                folder: this.state.folder
            });
        }
    };

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    };

    onUrlChange = (e) => {
        const url = e.target.value;
        this.setState(() => ({ url }));
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onFolderChange = (e) => {
        const folder = e.target.value;
        this.setState(() => ({ folder }));
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                {this.state.error && <p>{this.state.error}</p>}
                <input
                    type="text"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.onTitleChange}
                />
                <input
                    type="text"
                    placeholder="URL"
                    value={this.state.url}
                    onChange={this.onUrlChange}
                />
                <textarea
                    placeholder="Add a description for the link (optional)"
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                >
                </textarea>
                <select
                    placeholder="Folder"
                    value={this.state.folder}
                    onChange={this.onFolderChange}
                >
                    <option value=""> --- </option>
                    {
                        this.folders.map((folder) => (
                            <option
                                key={folder.id}
                                value={folder.id}
                            >
                                {folder.name}
                            </option>
                        ))
                    }
                </select>
                <button type="submit">Submit Link</button>
            </form>
        );
    }
}

export { LinkForm as default };
