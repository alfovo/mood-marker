import React from "react";
import PropTypes from "prop-types";
import MoodRoundedIcon from "@material-ui/icons/MoodRounded";
import MoodBadRoundedIcon from "@material-ui/icons/MoodBadRounded";
import FaceIcon from "@material-ui/icons/Face";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";

const Counter = props => (
  <div>
    <IconButton aria-label="Cart">
      <Badge badgeContent={props.totalGoodMoods} color="primary">
        <MoodRoundedIcon />
      </Badge>
    </IconButton>
    <IconButton aria-label="Cart">
      <Badge
        badgeContent={
          props.totalMoods - (props.totalBadMoods + props.totalGoodMoods)
        }
        color="secondary"
      >
        <FaceIcon />
      </Badge>
    </IconButton>
    <IconButton aria-label="Cart">
      <Badge badgeContent={props.totalBadMoods} color="error">
        <MoodBadRoundedIcon />
      </Badge>
    </IconButton>
  </div>
);

Counter.propTypes = {
  totalGoodMoods: PropTypes.number,
  totalBadMoods: PropTypes.number,
  totalMoods: PropTypes.number
};

export default Counter;
