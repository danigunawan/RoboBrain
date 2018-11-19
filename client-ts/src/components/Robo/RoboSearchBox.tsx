import * as React from 'react';


interface StatelessProps{
    onSearchChange: any;
}

export const SearchBox : React.SFC<StatelessProps> = ({ onSearchChange }) => {
    return (
                <form>
                    <div className="form-group">
                        <input type="search" className="form-control" id="searchRobot" aria-describedby="emailHelp" placeholder="Search Robot" onChange={onSearchChange}>
                        </input>
                    </div>
                </form>
            );
}
