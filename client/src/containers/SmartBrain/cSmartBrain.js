import React from 'react'
import { connect } from 'react-redux'
import Clarifai from 'clarifai'
import { BrowserRouter, Switch } from 'react-router-dom'
import ImageForm from 'components/SmartBrain/Recognition/SmartBrainRecognitionImageLink';
import FaceRecog from 'components/SmartBrain/Recognition/SmartBrainRecognitionBox';
import { setRoute, setRecogBox, setImageURL } from 'containers/SmartBrain/aSmartBrain'
import 'bootstrap/dist/css/bootstrap.min.css'

// sample photo
// https://samples.clarifai.com/face-det.jpg

const app = new Clarifai.App({
    apiKey: 'ab9f18e9276a4f9b94f742a30c3f3103'
});

const mapStateToProps = (state) => {
    return {
        inputURL: state.imageDetection.inputURL,
        box: state.imageDetection.box,
        route: state.signinStatus.route,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRouteChange: (route) => dispatch(setRoute(route)),
        setRecogBox: (box) => dispatch(setRecogBox(box)),
        setImageURL: (event) => dispatch(setImageURL(event.target.value))
    }
}

class SmartBrain extends React.Component {
    onInputChange = (event) => {
        this.setState({ inputURL: event.target.value });
    }

    onSubmitButton = () => {
        console.log('imageURL ', this.props.inputURL);
        app.models.predict(Clarifai.FACE_DETECT_MODEL, this.props.inputURL)
            .then(data => {
                console.log(data);
                this.displayFaceBox(this.calculateFaceLocation(data))
            })
            .catch(err => console.log(err));
    }

    displayFaceBox = (box) => {
        this.props.setRecogBox(box);
    }

    calculateFaceLocation = (data) => {
        const clarifaiFaces = data.outputs[0].data.regions.map(face => {
            const boundingBox = face.region_info.bounding_box;
            console.log('boundingBox ', boundingBox);
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
        console.log('clarifaiFaces ', clarifaiFaces);
        return clarifaiFaces;
    }

    render() {
        console.log('box_render ', this.props.box);
        return (
            <BrowserRouter>
                <Switch>
                    <div className="container">
                        <div>
                            <ImageForm onSubmitButton={this.onSubmitButton} setImageURL={this.props.setImageURL} />
                            <FaceRecog inputURL={this.props.inputURL} box={this.props.box} />
                        </div>
                    </div>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SmartBrain);