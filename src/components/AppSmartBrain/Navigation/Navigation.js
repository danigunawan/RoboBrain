import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';
import logo from './icons8-physics-64.png';


export class Navigation extends React.Component {

    render() {
        const { onRouteChange, isSignedIn, signedInUser } = this.props;

        if (isSignedIn) {
            return (
                <div className="row">
                    <div className="col-md-3 mr-auto" id="logo">
                        <img src={logo} alt="icon physics" />
                    </div>
                    <div>
                        <h6>Welcome back {signedInUser.name}</h6>
                        <a href="#" onClick={() => onRouteChange('signout')}>Sign Out</a>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="row">
                    <div className="col-md-3 mr-auto" id="logo">
                        <img src={logo} alt="icon physics" />
                    </div>
                    <div className="row col-md-3" id="SignIn">
                        <a href="#" onClick={() => onRouteChange('signin')}>Sign In</a>
                        <a href="#" onClick={() => onRouteChange('register')}>Register</a>
                    </div>
                </div>
            );
        }
    }
}