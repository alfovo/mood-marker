import React from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";

import EmotionIcon from "./EmotionIcon";

const MoodItem = props => (
  <Grid item xs={12}>
    <Paper className="paper">
      <Grid container>
        <Grid item xs={3}>
          <Avatar>
            <EmotionIcon isHappy={true} />
          </Avatar>
          {props.name}
        </Grid>
        <Grid item xs={3}>
          {props.time}
        </Grid>
        <Grid item xs={3}>
          {props.date}
        </Grid>
        <Grid item xs={3}>
          {/* <Button variant="fab" disabled aria-label="Delete" className="input-button"> */}
          <DeleteIcon />
          {/* </Button> */}
        </Grid>
      </Grid>
    </Paper>
  </Grid>
);

MoodItem.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
  // isHappy: PropTypes.boolean.isRequired
};

export default MoodItem;
