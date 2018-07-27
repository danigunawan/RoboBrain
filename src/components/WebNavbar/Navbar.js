import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

class Navbar extends React.Component {
    render() {

        return (
            <header class="container">
                {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                {/* <div class="collapse navbar-collapse" id="navbarNavDropdown"> */}
                <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous"></link>
                    <a class="navbar-brand mr-auto " href="#"><i id="navbar-icon" class="fas fa-blind fa-2x"></i></a>
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home<span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Product
                                </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">SmartBrain</a>
                                <a class="dropdown-item" href="#">Trading Platform</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>

                </nav>
                {/* </div> */}
            </header>
        );
    }
}

export default Navbar;