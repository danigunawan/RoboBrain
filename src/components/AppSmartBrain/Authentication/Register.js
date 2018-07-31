import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


export class Register extends React.Component {

    render() {
        return (
            <div className="container-fluid bg-light py-3">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card card-body">
                            <h3 className="text-center mb-4">Sign-up</h3>
                            <div className="alert alert-danger">
                                <a className="close font-weight-light" data-dismiss="alert" href="#">×</a>Password is too short.
                            </div>
                            <fieldset>
                                <div className="form-group has-error">
                                    <input className="form-control input-lg" placeholder="E-mail Address" name="email" type="text" />
                                </div>
                                <div className="form-group has-success">
                                    <input className="form-control input-lg" placeholder="Password" name="password" value="" type="password" />
                                </div>
                                <div className="form-group has-success">
                                    <input className="form-control input-lg" placeholder="Confirm Password" name="password" value="" type="password" />
                                </div>
                                <div className="form-group">
                                    <select className="form-control input-lg">
                                        <option selecterd="">Sequrity Question</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input className="form-control input-lg" placeholder="Sequrity Answer" name="answer" value="" type="text" />
                                </div>
                                <div className="checkbox">
                                    <label className="small">
                                        <input name="terms" type="checkbox" />I have read and agree to the <a href="#">terms of service</a>
                                    </label>
                                </div>
                                <input className="btn btn-lg btn-primary btn-block" value="Register" type="submit"/>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}