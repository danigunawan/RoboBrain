import React from '../../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SmartBrain_FaceRecog.css';

export class FaceRecog extends React.Component {

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

