import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './SmartBrainRecognitionBox.css'



class FaceRecog extends React.PureComponent {

    render() {
        const { inputURL, box } = this.props;

        const drawBoundingBox = box.map((bBox, index) => {
            return <div id="bounding-boxes" key={index} style={{ top: bBox.topRow, bottom: bBox.bottomRow, left: bBox.leftCol, right: bBox.rightCol }}>
            </div>
        })

        return (
            <div className="container col-md-9" id="content-box">
                <div className="d-inline-block" id="box">
                    <img id="inputImg" src={inputURL} alt=""></img>
                    {drawBoundingBox}
                </div>
            </div>

        );
    }
}

export default FaceRecog;
