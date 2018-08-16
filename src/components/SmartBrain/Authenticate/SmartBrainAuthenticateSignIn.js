import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom'

import { onSignIn } from 'actions'
import { APP_SMARTBRAIN, URLSERVER } from 'constans'
import 'bootstrap/dist/css/bootstrap.min.css'


const mapStateToProps = (state) => {
    return {
        isSignedIn: state.signinStatus.isSignedIn,
        signinEmail: state.signinStatus.signinEmail,
        signinPassword: state.signinStatus.signinPassword,
        signinRememberMe: state.signinStatus.signinRememberMe
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInputEmail: (event) => dispatch(() => { signinEmail: event.target.value }),
        onInputPassword: (event) => dispatch(() => { signinPassword: event.target.value }),
        onOptionRememberMe: (event) => dispatch(() => { signinRememberMe: event.target.value }),
        onSignIn: (boolean, user) => dispatch(onSignIn(boolean, user))
    }
}

class SignIn extends React.Component {

    onSubmitSignin = (event) => {
        event.preventDefault();

        fetch(URLSERVER + '/signin', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/plain, */*'
            },
            body: JSON.stringify({
                email: this.props.signinEmail,
                password: this.props.signinPassword
            })
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    throw new Error('wrong username or password');
                }
            })
            .then(user => {
                this.props.onSignIn(true, user);
                return <Redirect to="/projects/smartbrain" />;
            })
            .catch(err => alert(err));
    }

    render() {
        const { onInputEmail, onInputPassword, onOptionRememberMe, isSignedIn } = this.props;
        if (isSignedIn === true) {
            return <Redirect to="/projects/smartbrain" />
        }
        return (
            <BrowserRouter>
                <Switch>
                    <form class="form-signin col-md-4 offset-md-4" onSubmit={this.onSubmitSignin}>
                        <h3 class="h3 mb-3 font-weight-normal">Welcome Back</h3>
                        <label for="inputEmail" class="sr-only">Email address</label>
                        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus onChange={onInputEmail} />
                        <label for="inputPassword" class="sr-only">Password</label>
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required onChange={onInputPassword} />
                        <div class="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="true" onClick={onOptionRememberMe} /> Remember me
                    </label>
                        </div>
                        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    </form>
                </Switch>
            </BrowserRouter>
        );
    }

    // componentDidMount() {
    //     fetch(URLSERVER + '/profile')
    //         .then(res => {
    //             if (res.status === 200) {
    //                 console.log(res.json());
    //             } else {
    //                 throw new Error('Something went wrong ...');
    //             }
    //         })
    //         .catch(err => console.log(err));
    // }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);