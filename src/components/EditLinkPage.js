import React from 'react';
import { connect } from 'react-redux';

import LinkForm from './LinkForm';
import { editLink } from '../actions/links';

export class EditLinkPage extends React.Component {
    onSubmit = (data) => {
        this.props.editLink(this.props.link.id, data);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <h1>Edit Link</h1>
                <LinkForm link={this.props.link} onSubmit={this.onSubmit} />
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    link: state.links.find((link) => link.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    editLink: (id, data) => { dispatch(editLink(id, data)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditLinkPage);
