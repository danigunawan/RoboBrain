import React from 'react';

import {Card} from 'components/Robo/RoboCard';
 


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
