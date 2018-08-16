import React from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";

import MoodItem from "./MoodItem";

const MoodList = props => (
  <Grid container spacing={8}>
    {props.moods.map((mood, index) => (
      <MoodItem
        key={index}
        name={mood.name}
        time={mood.time}
        date={mood.date}
        isHappy={mood.isHappy}
      />
    ))}
  </Grid>
);

MoodList.propTypes = {
  moods: PropTypes.array.isRequired
};

export default MoodList;
