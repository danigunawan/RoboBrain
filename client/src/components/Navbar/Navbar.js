import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

export class Navbar extends React.Component {
    render() {
        return (
            <header className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous"></link>
                    <i id="navbar-brand" className="fas fa-blind fa-2x"></i>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNavDropdown" aria-controls="navbarNavDropdown"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active"><Link to="/">
                                Home<span className="sr-only">(current)</span>
                            </Link>
                            </li>
                            <li className="nav-item" id="dropdown">Projects
                                <div className="dropdown-content">
                                    <Link to="/projects/robofriend" className="dropdown-item">RoboFriend</Link>
                                    <Link to="/projects/smartbrain" className="dropdown-item">SmartBrain</Link>
                                </div>
                            </li>
                            <li className="nav-item"><Link to="/About">
                                About</Link>
                            </li>
                            <li className="nav-item"><Link to="/Contact">
                                Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

            </header>
        );
    }
}

