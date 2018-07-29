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
    }

    onInputChange = (event) => {
        this.setState({ inputURL: event.target.value });
    }

    onSubmitButton = (event) => {
        this.setState({ imageURL: this.state.inputURL });

        app.models.predict(Clarifai.GENERAL_MODEL, "https://samples.clarifai.com/metro-north.jpg")
        .then(
            function(response) {
                console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
                this.calculateFaceLocation(response);
            },
            function(err) {
                console.log(err);
            }
        );
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
                <FaceRecognition imageURL={this.state.imageURL}/>
            </div>
        );
    }
}