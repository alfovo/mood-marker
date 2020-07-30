import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";

import MoodItem from "./MoodItem";
import * as MoodActionCreators from "../actions/mood";

class MoodList extends Component {
  static propTypes: {
    moods: PropTypes.array.isRequired,
    isFiltered: PropTypes.bool.isRequired
  };

  // removeMoodAt = index =>
  //   this.setState({
  //     moods: [
  //       ...this.state.moods.slice(0, index),
  //       ...this.state.moods.slice(index + 1)
  //     ]
  //   });

  toggleFilter = () =>
    this.setState({
      isFiltered: !this.state.isFiltered
    });

  render() {
    const { dispatch, moods } = this.props;
    const addMood = bindActionCreators(MoodActionCreators.addMood, dispatch);
    const removeMood = bindActionCreators(
      MoodActionCreators.removeMood,
      dispatch
    );

    const moodComponents = moods.map((mood, index) => (
      <MoodItem
        index={index}
        name={mood.name}
        icon={mood.icon}
        time={mood.time}
        date={mood.date}
        removeMood={removeMood}
      />
    ));

    return (
      <div className="main">
        <Grid container spacing={0} className="profile">
          <Table className="table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <h3>Mood</h3>
                </TableCell>
                <TableCell numeric>
                  <h3>Time</h3>
                </TableCell>
                <TableCell numeric>
                  <h3>Date</h3>
                </TableCell>
                <TableCell numeric>
                  <h3>Delete?</h3>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{moodComponents}</TableBody>
          </Table>
        </Grid>
        <Grid
          container
          className="profile"
          direction="row"
          justify="flex-end"
          alignItems="baseline"
        >
          <input
            type="checkbox"
            onChange={this.toggleFilter}
            checked={this.isFiltered}
          />Show only today's moods
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  moods: state
});

export default connect(mapStateToProps)(MoodList);
