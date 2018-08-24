import React from 'react'
import { connect } from 'react-redux'
import { setRoute } from 'containers/SmartBrain/aSmartBrain'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Card } from 'components/Card/Card';
import { Navbar } from 'components/Navbar/Navbar';
import Robo from 'containers/Robo/cRobo';
import SmartBrain from 'containers/SmartBrain/cSmartBrain';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cProject.css';
import roboLogo from 'containers/Robo/img/robofriend.png';
import brainLogo from 'containers/SmartBrain/img/smartbrain.png'

const appInfo = [
    {
        Image: roboLogo,
        Title: 'RoboFriend',
        Text: 'Funny list of happy robots',
        route: '/projects/robofriend'
    },
    {
        Image: brainLogo,
        Title: 'SmartBrain',
        Text: 'Face detection using API',
        route: '/projects/smartbrain'
    }
]

const mapStateToProps = (state) => {
    return {
        route: state.signinStatus.route
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRouteChange: (route) => dispatch(setRoute(route))
    }
}

class Project extends React.Component {
   
    render() {
        const applist = (match) => appInfo.map((app, index) => {
            return <Card appImage={app.Image} appTitle={app.Title} appText={app.Text} appRoute={app.route} match={match} />
        })
        return (
            <BrowserRouter>
                <Switch>
                    <div>
                        <Navbar />
                        <div className="project-card-container container">
                            <Route exact path="/" render={({ match }) => (
                                <div className="row">
                                    {applist(match)}
                                </div>
                            )} />
                            <Route exact path="/projects/robofriend" render={() => (
                                <div className="container">
                                    <Robo />
                                </div>)}
                            />
                            <Route exact path="/projects/smartbrain" render={({ match }) => (
                                <SmartBrain match={match} />
                            )} />
                        </div>
                    </div>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);