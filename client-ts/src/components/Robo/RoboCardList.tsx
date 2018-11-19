import * as React from 'react';
import {Card} from 'components/Robo/RoboCard';


interface IProps{
    cardList: any[];
}

export class CardList extends React.Component<IProps>{
    constructor(props: IProps){
        super(props);
    }

    public render(): React.ReactNode{
        const card = this.props.cardList.map((card, index)=>{
            return (
                <Card card={card} key={index}/>
            );
        })

        return(
            <div className="row">
                {card}
            </div>
        );
    }
}
