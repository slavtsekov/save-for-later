import React from 'react';

class LinkForm extends React.Component {
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
                    <option value=""></option>
                </select>
            </form>
        );
    }
}

export { LinkForm as default };
