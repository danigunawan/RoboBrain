import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

export class SignIn extends React.Component {
    constructor(){
        super();
        this.state = {
            signinEmail:"",
            signinPassword:"",
            signinRememberMe: false
        }
    }

    onSubmitSignin=(event)=>{
        event.preventDefault();

        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/plain, */*'
            },
            body: JSON.stringify({
                email: this.state.signinEmail,
                password: this.state.signinPassword
            })
        })
            .then(res=> {
                if(res.status===200){
                    return res.json();
                } else{
                    throw new Error('wrong username or password');
                }
            })
            .then(data=> {
                this.props.onSignedIn(true, data);
                this.props.onRouteChange('home');
            })
            .catch(err=> alert(err));
    }

    onInputEmail=(event)=>{
        this.setState({signinEmail: event.target.value});
        console.log('email ', this.state.signinEmail);
    }

    onInputPassword=(event)=>{
        this.setState({signinPassword: event.target.value});
        console.log('password ', this.state.signinPassword);
    }

    onOptionRememberMe=(event)=>{
        console.log('remember-me ', event.target.value);
        this.setState({rememberMe: true});
    }

    componentDidMount(){
        fetch('http://localhost:3000/profile')
            .then(res=>{
                if(res.status===200){
                    console.log(res.json());
                } else{
                    throw new Error('Something went wrong ...');
                }
            })
            .catch(err=> console.log(err));
    }

    render() {
        const {onRouteChange} = this.props;
        return (
            <form class="form-signin col-md-4 offset-md-4" onSubmit={this.onSubmitSignin}>
                <h3 class="h3 mb-3 font-weight-normal">Welcome Back</h3>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus onChange={this.onInputEmail}/>
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required onChange={this.onInputPassword}/>
                <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" onClick={this.onOptionRememberMe}/> Remember me
                    </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </form>

        );
    }
}