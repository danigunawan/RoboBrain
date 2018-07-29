import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'components/AppRoboFriend/CardList/Card';


export class CardList extends React.Component{

    render(){
        const card = this.props.items.map((ite, index)=>{
            return (
                <Card card={ite}/>
            );
        })

        return(
            <div className="row">
                {card}
            </div>
        );
    }
}
