import React from 'react';
import {connect} from 'react-redux';
import './landing-header-bar.css'

export class LandingHeaderBar extends React.Component {
    render() {
        // Only render the log out button if we are logged in
        return (
                <header className="header-bar" role="banner">
                    <div id='stars'></div>
                    <div id='stars2'></div>
                    <div id='stars3'></div>
                    <div className="logo-text">BlogTopic</div>
                    <img className="logo" src="https://www.enomis.it/wp-content/uploads/holzbackofen-forum-barbecue-4.png" alt="BlogTopic" /> 
                </header>
                

        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingHeaderBar);