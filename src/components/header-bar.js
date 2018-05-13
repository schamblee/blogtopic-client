import React from 'react';
import {connect} from 'react-redux';
import './header-bar.css'

export class HeaderBar extends React.Component {
    render() {
        // Only render the log out button if we are logged in
        return (
                <header className="header-bar" role="banner">
                    <div className="logo-text">BlogTopic</div>
                    <img className="logo" src="https://www.enomis.it/wp-content/uploads/holzbackofen-forum-barbecue-4.png" alt="BlogTopic" /> 
                </header>
                

        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);