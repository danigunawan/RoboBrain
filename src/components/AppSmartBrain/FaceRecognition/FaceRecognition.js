import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './FaceRecognition.css';

export class FaceRecognition extends React.Component{

    render(){

        return (
            <div className="row" id="recognitionImage">
                <img src={this.props.imageURL} alt="Regconition Image"/>
            </div>
        );
    }
}

