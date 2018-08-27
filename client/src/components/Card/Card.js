import React from 'react'
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Card.css'

export class Card extends React.Component {
    constructor(){
        super();
        this.state={
            appImage: '',
            appTitle:'',
            appText:'',
            appRoute:'',
            match: ''
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps!==this.state){
            Object.assign(this.state, nextProps);
            return true;
        }
        return false;
    }

    render() {
        const { appImage, appTitle, appText, appRoute, match } = this.props;
        
        return (
            <div className="card-container container col-md-4 text-center">
                    <div className="card">
                    <Link to={appRoute}><img className="card-img-top" src={appImage} alt="Card"></img></Link>
                        <div className="card-body">
                            <h5 className="card-title">{appTitle}</h5>
                            <p className="card-text">{appText}</p>
                        </div>
                    </div>
            </div>
        );
    }
}