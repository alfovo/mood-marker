import React, {Component} from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

export default class NewMoodInput extends Component{
  static propTypes: {
      pendingMoodName: PropTypes.string.isRequired,
      pendingMoodIcon: PropTypes.number.isRequired
    };

    isFormValid = (pendingMoodIcon, pendingMoodName) =>
      pendingMoodIcon === null || pendingMoodName === "" ? false : true;


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


  render() {
    return (

  <form className="form" onSubmit={this.newMoodSubmitHandler}>
    <div className="form-control">
      <TextField
        className="text-field"
        label="Name"
        onChange={this.handleMoodNameInput}
        value={this.pendingMoodName}
      />
    </div>
    <TextField
      className="text-field"
      select
      label="Type"
      value={this.pendingMoodIcon}
      onChange={this.handleMoodTypeInput}
    >
      <MenuItem value={1}>Good</MenuItem>
      <MenuItem value={2}>Bad</MenuItem>
      <MenuItem value={0}>Neither</MenuItem>
    </TextField>
    <div className="button-control">
      <Button
        variant="contained"
        color="primary"
        type="onSubmit"
        disabled={!this.isFormValid(this.pendingMoodIcon, this.pendingMoodName)}
      >
        <AddIcon /> Add new mood
      </Button>
    </div>
  </form>
)}
};

// NewMoodInput.propTypes = {
//   newMoodSubmitHandler: PropTypes.func.isRequired,
//   handleMoodNameInput: PropTypes.func.isRequired,
//   handleMoodTypeInput: PropTypes.func.isRequired,
//   pendingMoodName: PropTypes.string.isRequired,
//   pendingMoodIcon: PropTypes.number.isRequired
// };
