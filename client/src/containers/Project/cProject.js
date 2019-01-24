import React from "react";
import { connect } from "react-redux";
import { setRoute } from "containers/SmartBrain/aSmartBrain";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loadable from 'react-loadable';
import { Card } from "components/Card/Card";
import { Navbar } from "components/Navbar/Navbar";
import "./cProject.css";
import roboLogo from "containers/Robo/img/robofriend.png";
import brainLogo from "containers/SmartBrain/img/smartbrain.png";

const appInfo = [
  {
    Image: roboLogo,
    Title: "RoboFriend",
    Text: "Funny list of happy robots",
    route: "/projects/robofriend"
  },
  {
    Image: brainLogo,
    Title: "SmartBrain",
    Text: "Face detection using API",
    route: "/projects/smartbrain"
  }
];

const mapStateToProps = state => {
  return {
    route: state.signinStatus.route
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRouteChange: route => dispatch(setRoute(route))
  };
};

const TIMEOUT = 10000;
const Loading = ()=>{
  return <div>Loading...</div>;
}

const Loadable_Robo = Loadable({
  loader: () => import('containers/Robo/cRobo'),
  render(loaded){
    let Robo = loaded.default;
    return <Robo/>;
  },
  loading: Loading,
  timeout: TIMEOUT
})

const Loadable_SmartBrain= Loadable({
  loader: ()=> import('containers/SmartBrain/cSmartBrain'),
  render(loaded){
    let SmartBrain = loaded.default;
    return <SmartBrain/>;
  },
  loading: Loading,
  timeout: TIMEOUT
})

class Project extends React.Component {
  render() {
    const applist = match =>
      appInfo.map((app, index) => {
        return (
          <Card key={index} appImage={app.Image} appTitle={app.Title} appText={app.Text} appRoute={app.route} match={match}/>
        );
      });

    console.log('Project start');

    return (
      <BrowserRouter>
        <Switch>
          <div className="container">
            <Navbar/>
            <div className="project-card-container container">
              <Route exact path="/" render={({ match }) => (
                  <div className="row">{applist(match)}</div>
                )}/>
               <Route exact path="/projects/robofriend" component={Loadable_Robo}/>
               <Route exact path="/projects/smartbrain" component={Loadable_SmartBrain} />
            </div>
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
