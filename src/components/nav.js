import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import './nav.css';

export class Nav extends React.Component {  
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }
    render() {
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <a onClick={() => this.logOut()}><li>Log out</li></a>
            );
        }
        const loggedIn = this.props.loggedIn;
        return (
            <nav className="nav">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    {loggedIn ? (
                    <ul id="menu">
                        {logOutButton}
                        <a href="/topics"><li>Topics</li></a>
                        <a href="/"><li>Home</li></a> 
                    </ul>
                    ) : (
                    <ul id="menu">
                        <a href="/#logIn"><li>Log In</li></a>
                        <a href="/register"><li>Create Account</li></a>
                        <a href="/"><li>Home</li></a>
                    </ul>
                    )}
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Nav);