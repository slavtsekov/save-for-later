import React from 'react';

import LinkForm from './LinkForm';

class AddLinkPage extends React.Component {
    onSubmit = (data) => {
        console.log(data);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <h1>Add Link</h1>
                <LinkForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export { AddLinkPage as default };
