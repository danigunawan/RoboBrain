import React from 'react';
import Clarifai from 'clarifai';

import { Navigation } from 'components/AppSmartBrain/Navigation/Navigation';
import { Ranking } from 'components/AppSmartBrain/Ranking/Ranking';
import { ImageLinkForm } from 'components/AppSmartBrain/ImageLinkForm/ImageLinkForm';
import { FaceRecognition } from 'components/AppSmartBrain/FaceRecognition/FaceRecognition';

import 'bootstrap/dist/css/bootstrap.min.css';
import './AppSmartBrain.css';

const app = new Clarifai.App({
    apiKey: '0b09880976d542439c1b91abe1f58df2'
   });

export class AppSmartBrain extends React.Component {

    constructor(){
        super();
        this.state = {
            inputURL : "",
            imageURL : "",
            box : {},
        };
    }

    calculateFaceLocation = (data) => {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
        console.log('clarifaiFace coordinate: ', clarifaiFace);
        const image = document.querySelector("#inputImg");
        const width = Number(image.width);
        const height = Number(image.height);
        return {
            leftCol: clarifaiFace.left_col*width,
            topRow: clarifaiFace.top_row*height,
            rightCol: width-(clarifaiFace.right_col*width),
            bottomRow: height-(clarifaiFace.bottom_row*height)
        };
    }

    displayFaceBox = (box) =>{
        console.log('bounding-box coordinate: ', box);
        this.setState({ box: box}); 
    }

    onInputChange = (event) => {
        this.setState({ inputURL: event.target.value });
    }

    onSubmitButton = (event) => {
        this.setState({ imageURL: this.state.inputURL }, function() {
            app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.imageURL)
                .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
                .catch(error => console.log(error))
        });
    }

    render() {
        return (
            <div className="container">
                <Navigation />
                <Ranking />
                <ImageLinkForm 
                    onInputChange={this.onInputChange} 
                    onSubmitButton={this.onSubmitButton}
                />
                <FaceRecognition box={this.state.box} imageURL={this.state.imageURL}/>
            </div>
        );
    }
}