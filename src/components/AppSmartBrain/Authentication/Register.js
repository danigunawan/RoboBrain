import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


export class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    onSubmit = (event) => {
        event.preventDefault();

        console.log(this.state.password);
        console.log(this.state.confirmPassword);
        if (this.state.password !== this.state.confirmPassword) {
            return alert('password and confirm-password is not the same');
        }

        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/plain, */*'
            },
            body: JSON.stringify(this.state)
        })
            .then(res => {
                if (res.status === 200) {
                    res.json();
                    this.props.onRouteChange('signin');
                }
            })
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    onInputName = (event) => {
        this.setState({ name: event.target.value });
    }

    onInputEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    onInputPassword = (event) => {
        this.setState({ password: event.target.value });
    }

    onInputConfirmPassword = (event) => {
        this.setState({ confirmPassword: event.target.value });
    }

    render() {
        return (
            <div className="container-fluid bg-light py-3">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card card-body">
                            <form onSubmit={this.onSubmit}>
                            <h3 className="text-center mb-4">Sign-up</h3>
                            <fieldset>
                                <div className="form-group has-error">
                                    <input className="form-control input-lg" placeholder="Name" name="name" type="text" required onChange={this.onInputName} />
                                </div>
                                <div className="form-group has-error">
                                    <input className="form-control input-lg" placeholder="E-mail Address" name="email" type="text" required onChange={this.onInputEmail} />
                                </div>
                                <div className="form-group has-success">
                                    <input className="form-control input-lg" placeholder="Password" name="password" type="password" required onChange={this.onInputPassword} />
                                </div>
                                <div className="form-group has-success">
                                    <input className="form-control input-lg" placeholder="Confirm Password" name="password" type="password" required onChange={this.onInputConfirmPassword} />
                                </div>
                                <div className="checkbox">
                                    <label className="small">
                                        <input name="terms" id="terms" type="checkbox" required/> I have read and agree to the <a href="#">terms of service</a>
                                    </label>
                                </div>
                                <input className="btn btn-lg btn-primary btn-block" value="Register" type="submit"/>
                            </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}