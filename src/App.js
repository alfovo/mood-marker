import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import MoodList from "./components/MoodList";

import "typeface-lato";

export default class App extends Component {
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

  render() {
    return (
      <div className="App">
        <Header />
        <MoodList moods={this.state.moods} />
      </div>
    );
  }
}
