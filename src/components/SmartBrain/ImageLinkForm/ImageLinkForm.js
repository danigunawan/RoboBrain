import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './ImageLinkForm.css';

export class ImageLinkForm extends React.Component{

    render(){

        return (
            <div className="container text-center" id="inputForm">
                <h5>Detect Faces In Picture</h5>
                <form className="form-inline">
                    <div className="form-group">
                        <input type="text" className="form-control" id="inputURL" aria-describedby="emailHelp" placeholder="Image URL" onChange={this.props.onInputChange}></input>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.props.onSubmitButton}>Detect</button>
                </form>
            </div>
        );
    }
}