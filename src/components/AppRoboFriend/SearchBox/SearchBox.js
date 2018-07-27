import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export class SearchBox extends React.Component {
    render() {
        return (
            <form>
                <div class="form-group">
                    {/* <label for="searchRobot">Search Robo</label> */}
                    <input type="search" class="form-control" id="searchRobot" aria-describedby="emailHelp" placeholder="Search Robot"
                    onChange={this.props.onSearchChange}></input>
                </div>
            </form>
        );
    }
}