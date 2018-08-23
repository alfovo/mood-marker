import React, { Component } from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";

import MoodList from "./components/MoodList";
import NewMoodInput from "./components/NewMoodInput";
import Profile from "./components/Profile";

import "typeface-lato";

class App extends Component {
  state = {
    isFiltered: false,
    profile: {
      name: "John Doe",
      motto: "De gustibus non est disputandum."
    },
    moods: [
      {
        name: "Surprised",
        icon: 1,
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString()
      },
      {
        name: "Content",
        icon: 1,
        time: "1:20 am",
        date: "12-19-1900"
      },
      {
        name: "Tired",
        icon: 0,
        time: "1:20 am",
        date: "12-19-1900"
      }
    ],
    pendingMoodName: "",
    pendingMoodIcon: ""
  };
  // figure out a way to only accept 3 strings for icon value

  // toggleDeleteAt = indexToChange =>
  //   this.setState({
  //     moods: this.state.moods.map((mood, index) => {
  //       if (index === indexToChange) {
  //         return {
  //           ...mood,
  //           hide: !mood.hide
  //         };
  //       }
  //       return mood;
  //     })
  //   });

  toggleFilter = () =>
    this.setState({
      isFiltered: !this.state.isFiltered
    });

  removeMoodAt = index =>
    this.setState({
      moods: [
        ...this.state.moods.slice(0, index),
        ...this.state.moods.slice(index + 1)
      ]
    });

  handleMoodNameInput = e =>
    this.setState({
      pendingMoodName: e.target.value
    });

  handleMoodTypeInput = e =>
    this.setState({
      pendingMoodIcon: e.target.value
    });

  newMoodSubmitHandler = e => {
    e.preventDefault();
    this.setState({
      moods: [
        {
          name: this.state.pendingMoodName,
          icon: this.state.pendingMoodIcon,
          time: new Date().toLocaleTimeString(),
          date: new Date().toLocaleDateString()
        },
        ...this.state.moods
      ],
      pendingMoodName: "",
      pendingMoodIcon: null
    });
  };

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

  render() {
    const totalMoods = this.getTotalMoods();
    const totalGoodMoods = this.getTotalGoodMoods();
    const totalBadMoods = this.getTotalBadMoods();

    return (
      <div className="App">
        <header>
          <Profile
            profile={this.state.profile}
            totalGoodMoods={totalGoodMoods}
            totalBadMoods={totalBadMoods}
            totalMoods={totalMoods}
          />
          <h1>Big Mood</h1>
          <Grid container spacing={0} className="profile">
            <Grid item xs={12}>
              <NewMoodInput
                newMoodSubmitHandler={this.newMoodSubmitHandler}
                handleMoodNameInput={this.handleMoodNameInput}
                handleMoodTypeInput={this.handleMoodTypeInput}
                pendingMoodName={this.state.pendingMoodName}
                pendingMoodIcon={this.state.pendingMoodIcon}
              />
            </Grid>
          </Grid>
        </header>
        <div className="main">
          <Grid container spacing={0} className="profile">
            <MoodList
              isFiltered={this.state.isFiltered}
              moods={this.state.moods}
              removeMoodAt={this.removeMoodAt}
            />
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
              checked={this.state.isFiltered}
            />Show only today's moods
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
