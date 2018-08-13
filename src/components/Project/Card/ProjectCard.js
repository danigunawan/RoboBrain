import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProjectCard.css';

export class Card extends React.Component {

    render() {
        const { appImage, appTitle, appText, appRoute, onRouteChange } = this.props;
        return (
            <div className="card-container col-md-4 col-sm-6">
                   <a href="#" >
{/* <div class="card" onClick={onRouteChange(appRoute)}> */}
<div class="card" >
                        <img class="card-img-top" src={appImage} alt="Card" onClick={onRouteChange(appRoute)}></img>
                        <div class="card-body">
                            <h5 class="card-title">{appTitle}</h5>
                            <p class="card-text">{appText}</p>
                        </div>
                    </div>
                   </a>
                    
            </div>
        );
    }
}