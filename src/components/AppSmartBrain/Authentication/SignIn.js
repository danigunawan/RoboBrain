import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

export class SignIn extends React.Component {

    render() {
        const {onRouteChange} = this.props;
        return (
            <form class="form-signin col-md-4 offset-md-4">
                <h1 class="h3 mb-3 font-weight-normal">Welcome Back</h1>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" />
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" />
                <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={()=> onRouteChange('home')}>Sign in</button>
            </form>

        );
    }
}