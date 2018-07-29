import React from 'react';
import {CardList} from 'components/AppRoboFriend/CardList/CardList';
import {SearchBox} from 'components/AppRoboFriend/SearchBox/SearchBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AppRoboFriend.css';


export class AppRoboFriend extends React.Component{
    constructor(){
        super();
        this.state = {
            robots : [],
            searchField: ""
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {this.setState({ robots: users})});
    }

    onSearchChange = (event) => {
       this.setState({ searchField: event.target.value})
    }
    
    render(){
        const filteredRobot = this.state.robots.filter((iter, index)=>{
            console.log(iter.name.toLowerCase());
            return iter.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })

        return(
            <div className="container text-center">
                <h1>RoboFriends</h1>
                <div className="container" id="searchBox">
                    <SearchBox onSearchChange={this.onSearchChange}/>
                </div>
                <div className="container">
                    <CardList items={filteredRobot}/>
                </div>
            </div>

        );
    }
}
