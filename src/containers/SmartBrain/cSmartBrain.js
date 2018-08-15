import React from 'react'
import {connect} from 'react-redux'
import Clarifai from 'clarifai'
import { BrowserRouter, Switch, Route } from 'react-router'

// import { ImageLinkForm } from 'components/AppSmartBrain/ImageLinkForm/ImageLinkForm';
// import { FaceRecognition } from 'components/AppSmartBrain/FaceRecognition/FaceRecognition';
import SignIn from 'components/SmartBrain/Authenticate/SmartBrainAuthenticateSignIn'
// import { Register } from 'components/AppSmartBrain/Authentication/Register';
import { Navbar } from 'components/SmartBrain/Authenticate/SmartBrainAuthenticateNavbar'
import {SIGNOUT,SIGNIN,REGISTER,URLSERVER} from 'constans'
import { setRoute} from 'actions'
import './cSmartBrain.css'
import 'bootstrap/dist/css/bootstrap.min.css'



const app = new Clarifai.App({
    apiKey: 'ab9f18e9276a4f9b94f742a30c3f3103'
});

const mapStateToProps=(state)=>{
    return{
        inputURL: state.imageDetection.inputURL,
        box: state.imageDetection.box,
        route: state.signinStatus.route,
        isSignedIn: state.signinStatus.isSignedIn,
        signedInUser: state.signinStatus.signedInUser
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        onRouteChange: (route) => dispatch(setRoute(route)),
        onSignedIn: (status, user)=> dispatch({isSignedIn: status, signedInUser: user})
    }
}

class SmartBrain extends React.Component {

    onInputChange = (event) => {
        this.setState({ inputURL: event.target.value });
    }

    onSubmitButton = () => {
        app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.inputURL)
            .then(response => {

                fetch(URLSERVER+'/image', {
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
        const { onRouteChange, isSignedIn, signedInUser, onSignedIn, route, match } = this.props;
        return (
            <BrowserRouter>
            <Switch>
            <div className="container">
                {/* <ErrorBoundry> */}
                <Navbar onRouteChange={onRouteChange} isSignedIn={isSignedIn} signedInUser={signedInUser} />
                {route === SIGNIN
                    ? <SignIn onRouteChange={onRouteChange} onSignedIn={onSignedIn} URLSERVER={URLSERVER} />
                    : <h1>TO IMPLEMNT REGISTER</h1>
                 
                }
                {/* </ErrorBoundry> */}
            </div>
            </Switch>
            </BrowserRouter>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SmartBrain);