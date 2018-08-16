import React, { Component } from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import MoodRoundedIcon from "@material-ui/icons/MoodRounded";
import MoodBadRoundedIcon from "@material-ui/icons/MoodBadRounded";
import FaceIcon from "@material-ui/icons/Face";
import Input from "@material-ui/core/Input";

import MoodList from "./components/MoodList";

class App extends Component {
  state = {
    moods: [
      {
        name: "Surprised",
        isHappy: false,
        date: "12-09-1900",
        time: "12:30 pm"
      },
      {
        name: "Content",
        isHappy: false,
        date: "12-19-1900",
        time: "1:20 am"
      },
      {
        name: "Tired",
        isHappy: true,
        date: "12-19-1900",
        time: "1:20 am"
      }
    ]
  };

  // getTotalHappy = () => this.state.moods.length;
  // getTotalSad = () => this.state.moods.length;
  // getTotalMeh = () => this.state.moods.length - getTotalSad - getTotalHappy;
  //   foreach(mood in this.state.moods){
  //     if(isHappy == false){
  //       totalHappy++;
  //     }
  //   }
  // }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Mood Marker</h1>
        </header>
        <div className="main">
          <Grid container spacing={8}>
            <Grid item xs={6}>
              <h2>John Doe</h2>
              <form>
                <Input
                  placeholder="Mood name"
                  // className={classes.input}
                  inputProps={{
                    "aria-label": "Description"
                  }}
                />
                <MoodRoundedIcon />
                <FaceIcon />
                <MoodBadRoundedIcon />
                <Button variant="contained" color="primary">
                  <AddIcon /> Add new mood
                </Button>
              </form>
              <label>
                <input type="checkbox" />Show only today's moods
              </label>
            </Grid>
            <Grid item xs={6}>
              <table className="counter">
                <tbody>
                  <tr>
                    <td>Good:</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Medium:</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Bad:</td>
                    <td>3</td>
                  </tr>
                </tbody>
              </table>
            </Grid>
          </Grid>
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={3}>
                  <h3>Mood</h3>
                </Grid>
                <Grid item xs={3}>
                  <h3>Time</h3>
                </Grid>
                <Grid item xs={3}>
                  <h3>Date</h3>
                </Grid>
                <Grid item xs={3}>
                  {/* <h3>Delete?</h3> */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <MoodList moods={this.state.moods} />
        </div>
      </div>
    );
  }
}

export default App;
