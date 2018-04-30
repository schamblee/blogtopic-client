import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import './nav.css';

export class Nav extends React.Component {

    render() {
        return (
            <nav className="nav" role="navigation">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <a href="#"><li>Login</li></a>
                        <a href="#"><li>Create Account</li></a>
                        <a href="#"><li>Search</li></a>
                        <a href="#"><li>Random Topic</li></a>
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Nav);