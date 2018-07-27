import React from 'react';
import Navbar from 'components/WebNavbar/Navbar';
import Body from 'components/WebBody/Body';
import Footer from 'components/WebFooter/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class Projects extends React.Component {
    render() {
        return (
            <div className="container">
                <Navbar/>
                <Body/>
                <Footer/>
            </div>
        );
    }

    componentDidMount(){
        console.log('ComponentDidMount');
    }
}

export default Projects;