import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import './nav.css';

export class Nav extends React.Component {  
    render() {
        const isLoggedIn = this.props.isLoggedIn;
        return (
            <nav className="nav" role="navigation">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    {isLoggedIn ? (
                    <ul id="menu">
                        <a href="/"><li>Log Out</li></a>
                        <a href="/topics"><li>Search Topics</li></a> 
                    </ul>
                    ) : (
                    <ul id="menu">
                        <a href="/"><li>Log In</li></a>
                        <a href="/register"><li>Create Account</li></a>
                        <a href="/topics"><li>Search Topics</li></a> 
                    </ul>
                    )}
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Nav);