import React from 'react';
import { connect } from 'react-redux';

import LinkForm from './LinkForm';
import { addLink } from '../actions/links';

export class AddLinkPage extends React.Component {
    onSubmit = (data) => {
        this.props.addLink(data);
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

const mapDispatchToProps = (dispatch) => ({
    addLink: (data) => { dispatch(addLink(data)); }
});

export default connect(undefined, mapDispatchToProps)(AddLinkPage);
