import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'

export class Navbar extends React.Component {
    render() {
        return (
            <header className="container">
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNavDropdown" aria-controls="navbarNavDropdown"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                {/* <div className="collapse navbar-collapse" id="navbarNavDropdown"> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous"></link>
                    <i id="navbar-icon" className="fas fa-blind fa-2x"></i>
                    <ul className="navbar-nav">
                        <li className="nav-item active"><Link to ="/">
                            Home<span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Projects
                                </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="">SmartBrain</a>
                                <a className="dropdown-item" href="">Trading Platform</a>
                            </div>
                        </li>
                        <li className="nav-item"><Link to="/About">
                            About</Link>
                        </li>
                        <li className="nav-item"><Link to ="/Contact">
                            Contact</Link>
                        </li>
                    </ul>

                </nav>
                {/* </div> */}
            </header>
        );
    }
}

