import React from 'react';
import {AppRoboFriend} from 'containers/AppRoboFriend/AppRoboFriend';
import {AppSmartBrain} from 'containers/AppSmartBrain/AppSmartBrain';

import 'bootstrap/dist/css/bootstrap.min.css';

class Body extends React.Component{
    render(){
        return(
            <div className="container">
                {/* <AppRoboFriend/> */}
                <AppSmartBrain/>
            </div>

        );
    }
}

export default Body;