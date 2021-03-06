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
        //mobile devices display a hamburger menu
        //large screens display a top nav-bar menu
        let logOutButton;
        let logOutButtonLarge;
        if (this.props.loggedIn) {
            logOutButton = (
                <a onClick={() => this.logOut()}><li>Log out</li></a>
            );
            logOutButtonLarge = (
                <a onClick={() => this.logOut()}><button className="nav-large-menu-items">Log out</button></a>
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
                        <a href="/topics"><li>Topics</li></a>
                        <a href="/"><li>Home</li></a> 
                        {logOutButton}
                    </ul>
                    ) : (
                    <ul id="menu">
                        <a href="/#logIn"><li>Log In</li></a>
                        <a href="/register"><li>Create Account</li></a>
                        <a href="/"><li>Home</li></a>
                    </ul>
                    )}
                </div>
                {loggedIn ? (
                <div id="nav-large-menu">
                    <a href="/"><button id="home-link" className="nav-large-menu-items">
                    <img className="logo-sm" src="https://www.enomis.it/wp-content/uploads/holzbackofen-forum-barbecue-4.png" alt="BlogTopic" /> <span className="logo-title">BlogTopic</span></button></a>
                    {logOutButtonLarge}
                    <a href="/topics"><button className="nav-large-menu-items">Topics</button></a> 
                </div> ) : (
                <div id="nav-large-menu">
                    <a href="/"><button id="home-link" className="nav-large-menu-items">
                    <img className="logo-sm" src="https://www.enomis.it/wp-content/uploads/holzbackofen-forum-barbecue-4.png" alt="BlogTopic" /> <span className="logo-title">BlogTopic</span></button></a>
                    <a href="/#logIn"><button className="nav-large-menu-items">Log In</button></a>
                    <a href="/register"><button className="nav-large-menu-items">Create Account</button></a>
                </div>
                )}
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Nav);