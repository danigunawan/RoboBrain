import React from 'react'
import { connect } from 'react-redux'
import { setRoute } from 'actions'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { PROJECT_MAINPAGE, APP_ROBOFRIEND, APP_SMARTBRAIN } from 'constans';
import { Card } from 'components/Card/Card';
import { Navbar } from 'components/Navbar/Navbar';
import SmartBrain from 'containers/SmartBrain/cSmartBrain';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cProject.css';

const appInfo = [
    {
        Image: '',
        Title: 'RoboFriend',
        Text: '',
        route: '/projects/robofriend'
    },
    {
        Image: '',
        Title: 'SmartBrain',
        Text: '',
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
    componentDidMount() {
        this.props.onRouteChange(PROJECT_MAINPAGE);
    }

    render() {
        const { route, onRouteChange, match } = this.props;
        const applist = (match) => appInfo.map((app, index) => {
            return <Card appImage={app.Image} appTitle={app.Title} appText={app.Text} appRoute={app.route} match={match} />
        })

        return (
            <BrowserRouter>
                <Switch>
                    <div>
                        <Navbar/>
                        <div className="project-card-container container">
                            <Route exact path="/" render={({ match }) => (
                                <div className="row">
                                    {applist(match)}
                                </div>
                            )} />
                            <Route exact path="/projects/robofriend" render={() => (
                                <div className="robofriend">ROBO FRIEND APP WILL BE INSERTED HERE</div>)}
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