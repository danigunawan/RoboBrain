import React from 'react';

import './RoboCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={`https://robohash.org/${this.props.card.id}`} alt="Card"></img>
                    <div className="card-body">
                        <h5 className="card-name">{this.props.card.name}</h5>
                        <p className="card-email">{this.props.card.email}</p>
                    </div>
            </div>
                );
            }
}