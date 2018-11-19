import * as React from "react";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "containers/Robo/aRobo";
import { CardList } from "components/Robo/RoboCardList";
import { SearchBox } from "components/Robo/RoboSearchBox";
import "./cRobo.css";


interface StateProps{
  searchField: string;
  robots: any[];
  isPending: boolean
}

const mapStateToProps = (state: any) : StateProps => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending
  };
};

interface DispatchProps{
  onSearchChange: typeof setSearchField;
  onRequestRobots: typeof requestRobots;
}

const mapDispatchToProps = (dispatch: any) : DispatchProps => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

interface Props extends StateProps, DispatchProps{

}

export class Robo extends React.Component<Props> {
  constructor(props: Props){
    super(props);
  }

  render(): JSX.Element {
    const { searchField, robots, onSearchChange } = this.props;

    const filterRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return (
      <div className="container text-center">
        <h1>RoboFriends</h1>
        <div className="container" id="searchBox">
          <SearchBox onSearchChange={onSearchChange} />
        </div>
        <div className="container">
          <CardList cardList={filterRobots} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.onRequestRobots();
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Robo);
