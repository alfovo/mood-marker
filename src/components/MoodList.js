import React from "react";
import PropTypes from "prop-types";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import MoodItem from "./MoodItem";

const MoodList = props => (
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
    <TableBody>
      {props.moods
        .filter(mood => !props.isFiltered || mood.hide)
        .map((mood, index) => (
          <MoodItem
            key={index}
            name={mood.name}
            icon={mood.icon}
            time={mood.time}
            date={mood.date}
            hide={mood.hide}
            handleRemove={() => props.removeMoodAt(index)}
          />
        ))}
    </TableBody>
  </Table>
);

MoodList.propTypes = {
  moods: PropTypes.array.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  removeMoodAt: PropTypes.func.isRequired
};

export default MoodList;
