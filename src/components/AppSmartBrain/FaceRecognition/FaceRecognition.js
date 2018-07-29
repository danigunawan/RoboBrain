import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './FaceRecognition.css';

export class FaceRecognition extends React.Component {

    render() {

        return (
            <div className="container col-md-9" id="content-box">
                <div className="d-inline-block" id="box">
                    <img id="inputImg" src={this.props.imageURL} alt=""></img>
                    <div id="bounding-boxes" style={{ top: this.props.box.topRow, bottom: this.props.box.bottomRow, left: this.props.box.leftCol, right: this.props.box.rightCol }}></div>
                </div>
            </div>
           
        );
    }
}

