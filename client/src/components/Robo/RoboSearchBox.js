import React from 'react';

 


export class SearchBox extends React.Component {

    render() {
        const { onSearchChange } = this.props;
        return (
            <form>
                <div className="form-group">
                    <input type="search" className="form-control" id="searchRobot" aria-describedby="emailHelp" placeholder="Search Robot" onChange={onSearchChange}>
                    </input>
                </div>
            </form>
        );
    }

}