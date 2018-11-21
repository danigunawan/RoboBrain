import * as React from 'react';
import { connect } from 'react-redux';
// import * as Clarifai from 'clarifai';
// import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import ImageForm from 'components/SmartBrain/Recognition/SmartBrainRecognitionImageLink';
// import FaceRecog from 'components/SmartBrain/Recognition/SmartBrainRecognitionBox';
// import SignIn from 'components/SmartBrain/Authenticate/SmartBrainAuthenticateSignIn';
// import Register from 'components/SmartBrain/Authenticate/SmartBrainAuthenticateRegister';
// import { Navbar } from 'components/SmartBrain/Authenticate/SmartBrainAuthenticateNavbar';
// import { URLSERVER } from 'constans';
import { setRoute, setRecogBox,setImageURL } from 'containers/SmartBrain/aSmartBrain';
import 'bootstrap/dist/css/bootstrap.min.css'


// Clarifai didn't support by Typescript
// const app = new Clarifai.App({
//     apiKey: 'ab9f18e9276a4f9b94f742a30c3f3103'
// });

interface StateProps{
    inputURL: string;
        box: any;
        route: string;
        isSignedIn: boolean;
        signedInUser: any;
}

const mapStateToProps = (state: any) : StateProps => {
    return {
        inputURL: state.imageDetection.inputURL,
        box: state.imageDetection.box,
        route: state.signinStatus.route,
        isSignedIn: state.signinStatus.isSignedIn,
        signedInUser: state.signinStatus.signedInUser,
    }
}

interface DispatchProps{
    onRouteChange: typeof setRoute;
    onSignedIn: any;
    setRecogBox: typeof setRecogBox;
    setImageURL: typeof setImageURL
}

const mapDispatchToProps = (dispatch: any) : DispatchProps => {
    return {
        onRouteChange: (route: string) => dispatch(setRoute(route)),
        onSignedIn: (status: any, user: any) => dispatch({ isSignedIn: status, signedInUser: user }),
        setRecogBox: (box: any)=> dispatch(setRecogBox(box)),
        setImageURL: (event: any) => dispatch(setImageURL(event.target.value))
    }
}

interface Props extends StateProps, DispatchProps{

}

class SmartBrain extends React.Component<Props> {
    constructor(props: Props){
        super(props);
    }

    onInputChange = (event: any) => {
        this.setState({ inputURL: event.target.value });
    }

    // onSubmitButton = () => {
    //     app.models.predict(Clarifai.FACE_DETECT_MODEL, this.props.inputURL)
    //         .then(response => {
    //             fetch(URLSERVER + '/image', {
    //                 method: 'put',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Accept': 'application/json, text/plain, */*'

    //                 },
    //                 body: JSON.stringify({ id: this.props.signedInUser.id })
    //             })
    //                 .then(res => res.json())
    //                 .then(entries => {
    //                     this.setState(Object.assign(this.props.signedInUser, { entries: entries }));
    //                 })
    //                 .catch(err => console.log(err));

    //             this.displayFaceBox(this.calculateFaceLocation(response));
    //         })
    //         .catch(err => console.log(err));
    // }

    // displayFaceBox = (box) => {
    //     // this.setState({ box: box });
    //     setRecogBox(box);
    // }

    // calculateFaceLocation = (data) => {
    //     const clarifaiFaces = data.outputs[0].data.regions.map(face => {
    //         const boundingBox = face.region_info.bounding_box;
    //         const image = document.querySelector("#inputImg");
    //         const width = Number(image.width);
    //         const height = Number(image.height);
    //         return {
    //             leftCol: boundingBox.left_col * width,
    //             topRow: boundingBox.top_row * height,
    //             rightCol: width - (boundingBox.right_col * width),
    //             bottomRow: height - (boundingBox.bottom_row * height)
    //         };
    //     })

    //     return clarifaiFaces;
    // }

    // render() {
    //     const { isSignedIn, signedInUser, onSignedIn } = this.props;
    //     console.log('SmartBrain start');
    //     return (
    //         <BrowserRouter>
    //             <Switch>
    //                 <div className="container">
    //                     <Navbar isSignedIn={isSignedIn} signedInUser={signedInUser} />
    //                     {isSignedIn
    //                         ? <div>
    //                             <ImageForm onSubmitButton={this.onSubmitButton} setImageURL={this.props.setImageURL}/>
    //                             <FaceRecog inputURL={this.props.inputURL} box={this.props.box}/>
    //                         </div>
    //                         : <Redirect to="/projects/smartbrain/signin" />
    //                     }
    //                     <Route path="/projects/smartbrain/signin" render={() => (
    //                                 <SignIn onSignedIn={onSignedIn} URLSERVER={URLSERVER} />
    //                             )} />
    //                     <Route path="/projects/smartbrain/register" render={() => (
    //                         <Register />
    //                     )} />
    //                 </div>
    //             </Switch>
    //         </BrowserRouter>
    //     );
    // }
}

export default connect(mapStateToProps, mapDispatchToProps)(SmartBrain);