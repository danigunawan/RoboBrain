import * as React from 'react';
import './RoboCard.css';


interface IProps{
    card: any;
    key: number;
}

export class Card extends React.Component<IProps> {
    constructor(props: IProps){
        super(props);
    }

    public render(): JSX.Element {
        const id = this.props.card.id;
        const name = this.props.card.name;
        const email = this.props.card.email;

        return (
            <div className="card">
                <img className="card-img-top" src={`https://robohash.org/${id}`} alt="Card"/>
                    <div className="card-body">
                        <h5 className="card-name">{name}</h5>
                        <p className="card-email">{email}</p>
                    </div>
            </div>
                );
            }
}