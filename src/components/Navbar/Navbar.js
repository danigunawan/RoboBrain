import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { PROJECT_MAINPAGE } from 'constans';

export class Navbar extends React.Component {
    render() {
        const { onRouteChange } = this.props;

        return (
            <header className="container">
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNavDropdown" aria-controls="navbarNavDropdown"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                {/* <div className="collapse navbar-collapse" id="navbarNavDropdown"> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous"></link>
                    <a className="navbar-brand mr-auto " href=""><i id="navbar-icon" className="fas fa-blind fa-2x"></i></a>
                    <ul className="navbar-nav">
                        <li className="nav-item active" onClick={()=> onRouteChange(PROJECT_MAINPAGE)}>
                            <a className="nav-link" href="#">Home<span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Projects
                                </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="">SmartBrain</a>
                                <a className="dropdown-item" href="">Trading Platform</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Contact</a>
                        </li>
                    </ul>

                </nav>
                {/* </div> */}
            </header>
        );
    }
}

