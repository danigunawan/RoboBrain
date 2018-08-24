import React from 'react'
import { connect } from 'react-redux'

import { URLSERVER } from 'constans'
import { setRegisterParam } from 'containers/SmartBrain/aSmartBrain'
import 'bootstrap/dist/css/bootstrap.min.css'

const mapStateToProps = (state) => {
    return {
        name: state.RegisterUser.name,
        email: state.RegisterUser.email,
        password: state.RegisterUser.password,
        confirmPassword: state.RegisterUser.confirmPassword,
        isRegistered: state.RegisterUser.isRegistered
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setRegisterParam: (param, event) => {
            if (param === 'isRegistered') {
                return dispatch(setRegisterParam(param, true));
            } else {
                return dispatch(setRegisterParam(param, event.target.value));
            }
        }
    }
}

class Register extends React.Component {

    onSubmit = (event) => {
        event.preventDefault();

        if (this.props.password !== this.props.confirmPassword) {
            return alert('password and confirm-password is not the same');
        }

        fetch(URLSERVER + '/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/plain, */*'
            },
            body: JSON.stringify(this.props)
        })
            .then(res => {
                if (res.status === 200) {
                    res.json();
                    setRegisterParam('isRegistered');
                } else {
                    throw new Error('email already used');
                }
            })
            .then(data => console.log(data))
            .catch(err => alert(err))
    }

    render() {
        return (
            <div className="container-fluid bg-light py-3">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <form onSubmit={this.onSubmit}>
                            <h3 className="text-center mb-4">Sign-up</h3>
                            <fieldset>
                                <div className="form-group has-error">
                                    <input className="form-control input-lg" placeholder="Name" name="name" type="text" required onChange={setRegisterParam('name')} />
                                </div>
                                <div className="form-group has-error">
                                    <input className="form-control input-lg" placeholder="E-mail Address" name="email" type="text" required onChange={setRegisterParam('email')} />
                                </div>
                                <div className="form-group has-success">
                                    <input className="form-control input-lg" placeholder="Password" name="password" type="password" required onChange={setRegisterParam('password')} />
                                </div>
                                <div className="form-group has-success">
                                    <input className="form-control input-lg" placeholder="Confirm Password" name="password" type="password" required onChange={setRegisterParam('confirmPassword')} />
                                </div>
                                <div className="checkbox">
                                    <label className="small">
                                        <input name="terms" id="terms" type="checkbox" required /> I have read and agree to the <a href="#">terms of service</a>
                                    </label>
                                </div>
                                <input className="btn btn-lg btn-primary btn-block" value="Register" type="submit" />
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);