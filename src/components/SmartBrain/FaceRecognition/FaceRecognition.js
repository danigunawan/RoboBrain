import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './FaceRecognition.css';

export class FaceRecognition extends React.Component {

    render() {
        const { imageURL, box } = this.props;

        const drawBoundingBox = box.map((bBox, index) =>{
            return <div id="bounding-boxes" key={index} style={{ top: bBox.topRow, bottom: bBox.bottomRow, left: bBox.leftCol, right: bBox.rightCol }}>
                   </div>
        })

        return (
            <div className="container col-md-9" id="content-box">
                <div className="d-inline-block" id="box">
                    <img id="inputImg" src={imageURL} alt=""></img>
                    { drawBoundingBox }
                </div>
            </div>
           
        );
    }
}

