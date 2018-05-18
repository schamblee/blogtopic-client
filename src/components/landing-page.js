import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import CallToAction from './call-to-action'
import HeaderBar from './header-bar'
import LoginForm from './login-form';
import './landing-page.css'

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
        <HeaderBar />
        <CallToAction />
        <section className="login-section">
            <h2 className="loginTitle">Login in to BlogTopic</h2>
            <div className="demo-credentials">Demo Cedentials<br/>
                <b>Username:</b>  demo <br/>
                <b>Password:</b>  password123 
            </div>
            <LoginForm />
        </section>
            <div className="register-text">Don't have an account?
                <Link to="/register"> <span className="register-link">Register</span></Link>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);