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
        if (this.props.isLoggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
        }
        const isLoggedIn = this.props.isLoggedIn;
        return (
            <nav className="nav">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    {isLoggedIn ? (
                    <ul id="menu">
                        {logOutButton}
                        <a href="/topics"><li>Search Topics</li></a> 
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