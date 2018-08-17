import React from 'react'
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Card.css'

export class Card extends React.Component {

    render() {
        const { appImage, appTitle, appText, appRoute, match } = this.props;
        
        return (
            <div className="card-container container col-md-4 text-center">
                    <div class="card">
                    <Link to={appRoute}><img class="card-img-top" src={appImage} alt="Card"></img></Link>
                        <div class="card-body">
                            <h5 class="card-title">{appTitle}</h5>
                            <p class="card-text">{appText}</p>
                        </div>
                    </div>
            </div>
        );
    }
}