import React from "react";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "containers/Robo/aRobo";
import { CardList } from "components/Robo/RoboCardList";
import { SearchBox } from "components/Robo/RoboSearchBox";
import "./cRobo.css";

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

export class Robo extends React.Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { robots, onSearchChange } = this.props;
    const filterRobots = robots.filter((robot, index) => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    });

    return (
      <div className="container text-center">
        <h1>RoboFriends</h1>
        <div className="container" id="searchBox">
          <SearchBox onSearchChange={onSearchChange} />
        </div>
        <div className="container">
          <CardList items={filterRobots} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Robo);
