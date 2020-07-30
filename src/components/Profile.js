import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import FaceIcon from "@material-ui/icons/Face";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Grid from "@material-ui/core/Grid";
import Counter from "./Counter";

const Profile = props => (
  <Grid
    container
    className="user-icon"
    direction="row"
    justify="space-between"
    alignItems="baseline"
  >
    <div className="row">
      {/* <h3 className="avatar-description">{props.profile.name}</h3> */}
      <h3 className="avatar-description">Frank</h3>
      <Avatar>
        <FaceIcon />
      </Avatar>
      <ArrowDropDownIcon />
    </div>
    <Counter
      totalGoodMoods={props.totalGoodMoods}
      totalBadMoods={props.totalBadMoods}
      totalMoods={props.totalMoods}
    />
  </Grid>
);

Profile.propTypes = {
  profile: PropTypes.any.isRequired,
  totalMoods: PropTypes.number.isRequired,
  totalBadMoods: PropTypes.number.isRequired,
  totalGoodMoods: PropTypes.number.isRequired
};

export default Profile;
