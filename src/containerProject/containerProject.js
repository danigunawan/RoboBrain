import React from 'react';
import { connect } from 'react-redux';
import { setRoute } from 'actions';
import { PROJECT_MAINPAGE, APP_ROBOFRIEND, APP_SMARTBRAIN } from 'constans';
import { Card } from 'components/Card/Card';
import { Navbar } from 'components/Navbar/Navbar';
import SmartBrain from 'containerSmartBrain/containerSmartBrain';
import 'bootstrap/dist/css/bootstrap.min.css';
import './containerProject.css';

const appInfo = [
    {
        appImage: '',
        appTitle: 'RoboFriend',
        appText: '',
        route: APP_ROBOFRIEND
    },
    {
        appImage: '',
        appTitle: 'SmartBrain',
        appText: '',
        route: APP_SMARTBRAIN
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
        const { route, onRouteChange } = this.props;
        const applist = appInfo.map((app, index) => {
            return <Card appImage={app.appImage} appTitle={app.appTitle} appText={app.appText} appRoute={app.route} onRouteChange={onRouteChange} />
        })

        return (
            <div className="project-mainpage">
                <Navbar onRouteChange={onRouteChange}/>
                <div className="project-card-container container">
                    {route === PROJECT_MAINPAGE
                        ? <div className="row">
                            {applist}
                        </div>
                        : (route === APP_ROBOFRIEND
                            ? <div className="robofriend">ROBO FRIEND APP WILL BE INSERTED HERE</div>
                            : (route === APP_SMARTBRAIN
                                ? <div className="smartbrain">
                                    <SmartBrain />
                                </div>
                                : <h3>error: there is no Route assign</h3>
                            )
                        )}
                </div>
            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);