import React, {Component} from "react";
import PropTypes from "prop-types";
import NewMoodInput from "./NewMoodInput";
import Profile from "./Profile";

import Grid from "@material-ui/core/Grid";

export default class Header extends Component {

  getTotalGoodMoods = () =>
    this.state.moods.reduce(
      (total, mood) => (mood.icon === 1 ? total + 1 : total),
      0
    );

  getTotalBadMoods = () =>
    this.state.moods.reduce(
      (total, mood) => (mood.icon === 2 ? total + 1 : total),
      0
    );

  getTotalMoods = () => this.state.moods.length;

  // const totalMoods = this.getTotalMoods();
  // const totalGoodMoods = this.getTotalGoodMoods();
  // const totalBadMoods = this.getTotalBadMoods();

  render() {
    return (
  <header>
    <Profile
      // profile={this.state.profile}
      totalGoodMoods={this.getTotalGoodMoods}
      totalBadMoods={this.getTotalBadMoods}
      totalMoods={this.getTotalMoods}
    />
    <h1>Big Mood</h1>
    <Grid container spacing={0} className="profile">
      <Grid item xs={12}>
        <NewMoodInput
          // pendingMoodName={this.state.pendingMoodName}
          // pendingMoodIcon={this.state.pendingMoodIcon}
        />
      </Grid>
    </Grid>
  </header>
)}}
