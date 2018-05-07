import React from 'react';
import {connect} from 'react-redux';
import './header-bar.css'

export class HeaderBar extends React.Component {
    render() {
        // Only render the log out button if we are logged in
        return (
                <header className="header-bar" role="banner">
                    <h1>
                        <div>
                            <img className="logo" src="https://image.flaticon.com/icons/svg/196/196768.svg" alt="BlogTopic" /> 
                            <div className="logo-text">BlogTopic</div>
                        </div>
                    </h1> 
                </header>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);