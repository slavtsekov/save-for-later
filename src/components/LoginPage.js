import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = (props) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Save For Later</h1>
            <p>Save your online links for later reading.</p>
            <button
                type="button"
                className="button"
                onClick={props.startLogin}
            >
                Login with Google
            </button>
        </div>
    </div>
);


const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
