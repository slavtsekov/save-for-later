import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = (props) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1>Save For Later</h1>
                </Link>
                <button
                    className="button button--link"
                    type="button"
                    onClick={props.startLogout}
                >
                    Logout
                </button>
            </div>
            <nav>
                <Link to="/dashboard">
                    <h2>Home</h2>
                </Link>
                <Link to="/folders">
                    <h2>Folders</h2>
                </Link>
            </nav>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
