import React from 'react';
import Clarifai from 'clarifai';

import { Navigation } from 'components/AppSmartBrain/Navigation/Navigation';
import { ImageLinkForm } from 'components/AppSmartBrain/ImageLinkForm/ImageLinkForm';
import { FaceRecognition } from 'components/AppSmartBrain/FaceRecognition/FaceRecognition';
import { SignIn } from 'components/AppSmartBrain/Authentication/SignIn';
import { Register } from 'components/AppSmartBrain/Authentication/Register';

import 'bootstrap/dist/css/bootstrap.min.css';
import './AppSmartBrain.css';

const app = new Clarifai.App({
    apiKey: process.env.API_CLARIFAI_KEY
});

const initialState={
    inputURL: "",
    box: [],
    route: "home",
    isSignedIn: false,
    signedInUser: {
        id: null,
        name: "",
        email: "",
        entries: 0,
        joined: "",
        password: ""
    }
}

export class AppSmartBrain extends React.Component {

    constructor() {
        super();
        this.state = {
            inputURL: "",
            box: [],
            route: "home",
            isSignedIn: false,
            signedInUser: {
                id: null,
                name: "",
                email: "",
                entries: 0,
                joined: "",
                password: ""
            },
            urlServer: "https://radiant-eyrie-72396.herokuapp.com"
        };
    }

    onRouteChange = (route) => {
        if (route === 'signout') {
            // this.setState({ route: route, isSignedIn: false, signedInUser: "" });
            this.setState(initialState);
        }

        this.setState({ route: route });
    }

    onSignedIn = (bool, user) => {
        this.setState({ isSignedIn: bool, signedInUser: user });
    }

    onInputChange = (event) => {
        this.setState({ inputURL: event.target.value });
    }

    onSubmitButton = () => {
        app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.inputURL)
            .then(response => {

                fetch(this.state.urlServer+'/image', {
                    method: 'put',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json, text/plain, */*'

                    },
                    body: JSON.stringify({ id: this.state.signedInUser.id })
                })
                    .then(res => res.json())
                    .then(entries => {
                        this.setState(Object.assign(this.state.signedInUser, { entries: entries }));
                    })
                    .catch(err => console.log(err));

                this.displayFaceBox(this.calculateFaceLocation(response));
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
                <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} signedInUser={this.state.signedInUser} />
                {this.state.route === 'signin'
                    ? <SignIn onRouteChange={this.onRouteChange} onSignedIn={this.onSignedIn} urlServer={this.state.urlServer} />
                    : (this.state.route === 'register'
                        ? <Register onRouteChange={this.onRouteChange} urlServer={this.state.urlServer}/>
                        : (this.state.route === 'home' || this.state.route === 'signout'
                            ? <div>
                                <ImageLinkForm
                                    onInputChange={this.onInputChange}
                                    onSubmitButton={this.onSubmitButton}
                                />
                                <FaceRecognition box={this.state.box} imageURL={this.state.inputURL} />
                            </div>
                            : <h1>ERROR: Not Found</h1>
                        )
                    )
                }
            </div>
        );
    }
}