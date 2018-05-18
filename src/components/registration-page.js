import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import RegistrationForm from './registration-form';
import CallToAction from './call-to-action'
import HeaderBar from './header-bar'
import './registration-page.css'

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div className="home">
            <HeaderBar />
            <CallToAction />
            <section className="register-section">
                <h2 className="registerTitle">Start Blogging Now</h2>
                <RegistrationForm />
            </section>
            <div className="login-text">Already have an account?
                <Link to="/"> <span className="register-link">Login</span></Link>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);