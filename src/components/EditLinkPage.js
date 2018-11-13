import React from 'react';

import LinkForm from './LinkForm';

class EditLinkPage extends React.Component {
    link = {
        title: 'New Link',
        url: 'link.com',
        description: 'New Link',
        folder: 'folder1'
    };

    onSubmit = (data) => {
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <h1>Edit Link</h1>
                <LinkForm link={this.link} onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export { EditLinkPage as default };
