import * as React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'


interface IProps {
    appImage: any,
    appTitle: string,
    appText: string,
    appRoute: string,
    match: any;
}

// React.PureComponent only has state, no dispatch
// React.PureComponent implement shouldComponentUpdate(nextIProps, nextState)
export class Card extends React.PureComponent<IProps>{
    constructor(props: IProps){
        super(props);
    }

    // only shallowly compares the objects. If these contain complex data structures, 
    // it may produce false-negatives for deeper differences
    public shouldComponentUpdate(nextProps: IProps){
        if(nextProps!==this.state){
            Object.assign(this.state, nextProps);
            return true;
        }
        return false;
    }

    public render(): JSX.Element {
        const { appImage, appTitle, appText, appRoute } = this.props;
        
        return (
            <div className="card-container container col-md-4 text-center">
                    <div className="card">
                    <Link to={appRoute}><img className="card-img-top" src={appImage} alt="Card"/></Link>
                        <div className="card-body">
                            <h5 className="card-title">{appTitle}</h5>
                            <p className="card-text">{appText}</p>
                        </div>
                    </div>
            </div>
        );
    }
}