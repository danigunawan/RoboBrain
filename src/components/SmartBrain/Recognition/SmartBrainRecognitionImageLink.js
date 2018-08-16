import React from 'react'
import { connect } from 'react-redux';

import {setImageURL} from 'actions'
import 'bootstrap/dist/css/bootstrap.min.css'
import './SmartBrainRecognitionImageLink.css'


const mapStateToProps=(state)=>{
    return{
        inputURL: state.imageDetection.inputURL
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        setImageURL: (event)=> dispatch(setImageURL(event.target.value))
    }
}

class ImageForm extends React.Component{

    render(){
        const {setImageURL} = this.props;
        return (
            <div className="container text-center" id="inputForm">
                <h5>Detect Faces In Picture</h5>
                <form className="form-inline">
                    <div className="form-group">
                        <input type="text" className="form-control" id="inputURL" aria-describedby="emailHelp" placeholder="Image URL" onChange={setImageURL}></input>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.props.onSubmitButton}>Detect</button>
                </form>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageForm);