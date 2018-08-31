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
  filterRobots = () => {
    return this.props.robots.filter((iter, index) => {
      return iter.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    });
  }

  render() {
    const { onSearchChange } = this.props;

    return (
      <div className="container text-center">
        <h1>RoboFriends</h1>
        <div className="container" id="searchBox">
          <SearchBox onSearchChange={onSearchChange} />
        </div>
        <div className="container">
          <CardList items={this.filterRobots} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.onRequestRobots();
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Robo);
