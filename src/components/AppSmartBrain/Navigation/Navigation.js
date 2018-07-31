import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';


export class Navigation extends React.Component{

    render(){

        return (
            <div className="row">
                <div className="col-md-3 mr-auto" id="logo">
                    LOGO
                </div>
                <div className="row col-md-3" id="SignIn">
                    <a href="" onClick={()=> onRouteChange('signin')}>Sign In</a>
                    <a href="" onClick={()=> onRouteChange('register')}>Register</a>
                </div>
            </div>
        );
    }
}