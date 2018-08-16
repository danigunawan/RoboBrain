import React from 'react'
import { Link } from 'react-router-dom'

import {SIGNOUT,SIGNIN,REGISTER} from 'constans'
import './SmartBrainAuthenticateNavbar.css'
import logo from './icons8-physics-64.png'
import 'bootstrap/dist/css/bootstrap.min.css'


export class Navbar extends React.Component {

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
                        <a href="#" onClick={() => onRouteChange(SIGNOUT)}>Sign Out</a>
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
                        <Link to="/projects/smartbrain/signin">Sign In</Link>
                        <Link to="/projects/smartbrain/register">Register</Link>
                    </div>
                </div>
            );
        }
    }
}