import React from "react";
import PropTypes from "prop-types";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Avatar from "@material-ui/core/Avatar";
// import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import FaceIcon from "@material-ui/icons/Face";
import MoodRoundedIcon from "@material-ui/icons/MoodRounded";
import MoodBadRoundedIcon from "@material-ui/icons/MoodBadRounded";
import IconButton from "@material-ui/core/IconButton";

function renderFaceIcon(icon) {
  switch (icon) {
    case 1:
      return <MoodRoundedIcon />;
    case 2:
      return <MoodBadRoundedIcon />;
    default:
      return <FaceIcon />;
  }
}

const MoodItem = props => (
  <TableRow>
    <TableCell>
      <div className="row">
        <Avatar className="avatar">{renderFaceIcon(props.icon)}</Avatar>
        <h3 className="avatar-description">{props.name}</h3>
      </div>
    </TableCell>
    <TableCell numeric>{props.time}</TableCell>
    <TableCell numeric>{props.date}</TableCell>
    <TableCell numeric>
      <IconButton aria-label="Delete" onClick={props.handleRemove}>
        <DeleteIcon />
      </IconButton>
    </TableCell>
  </TableRow>
);

MoodItem.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
  icon: PropTypes.number.isRequired
};

export default MoodItem;
