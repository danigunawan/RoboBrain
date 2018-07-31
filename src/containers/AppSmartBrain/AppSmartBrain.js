import React from 'react';
import Clarifai from 'clarifai';

import { Navigation } from 'components/AppSmartBrain/Navigation/Navigation';
import { Ranking } from 'components/AppSmartBrain/Ranking/Ranking';
import { ImageLinkForm } from 'components/AppSmartBrain/ImageLinkForm/ImageLinkForm';
import { FaceRecognition } from 'components/AppSmartBrain/FaceRecognition/FaceRecognition';
import { SignIn } from 'components/AppSmartBrain/Authentication/SignIn';
import { Register } from 'components/AppSmartBrain/Authentication/Register';

import 'bootstrap/dist/css/bootstrap.min.css';
import './AppSmartBrain.css';

const app = new Clarifai.App({
    apiKey: 'ab9f18e9276a4f9b94f742a30c3f3103'
});

export class AppSmartBrain extends React.Component {

    constructor() {
        super();
        this.state = {
            inputURL: "",
            box: [],
            route: "",
        };
    }

    onRouteChange = (route) => {
        this.setState({ route: route });
    }

    onInputChange = (event) => {
        this.setState({ inputURL: event.target.value });
    }

    onSubmitButton = () => {
        app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.inputURL)
            .then(response => {
                this.displayFaceBox(this.calculateFaceLocation(response))
            })
            .catch(err => console.log(err));
    }

    displayFaceBox = (box) => {
        this.setState({ box: box });
    }

    calculateFaceLocation = (data) => {
        const clarifaiFaces = data.outputs[0].data.regions.map(face => {
            const boundingBox = face.region_info.bounding_box;
            const image = document.querySelector("#inputImg");
            const width = Number(image.width);
            const height = Number(image.height);
            return {
                leftCol: boundingBox.left_col * width,
                topRow: boundingBox.top_row * height,
                rightCol: width - (boundingBox.right_col * width),
                bottomRow: height - (boundingBox.bottom_row * height)
            };
        })

        return clarifaiFaces;
    }

    render() {

        return (
            <div className="container">
                <Navigation onRouteChange={this.onRouteChange} />
                {this.state.route === 'signin'
                    ? <SignIn />
                    : (
                        this.state.route === 'register'
                            ? <Register />
                            : <div>
                                <ImageLinkForm
                                    onInputChange={this.onInputChange}
                                    onSubmitButton={this.onSubmitButton}
                                />
                                <FaceRecognition box={this.state.box} imageURL={this.state.inputURL} />
                            </div>
                    )
                }
            </div>
        );
    }
}