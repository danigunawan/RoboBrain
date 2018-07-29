import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';

export class Card extends React.Component {
    render() {
        return (
            <div class="card">
                <img class="card-img-top" src={`https://robohash.org/${this.props.card.id}`} alt="Card image cap"></img>
                    <div class="card-body">
                        <h5 class="card-name">{this.props.card.name}</h5>
                        <p class="card-email">{this.props.card.email}</p>
                    </div>
            </div>
                );
            }
}