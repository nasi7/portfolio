import React, { Component } from "react";
import "./App.css";
import Navigation from "./Navigation";
import Timeline from "./Timeline";
import Paper from "@material-ui/core/Paper";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Paper elevation={9}>
          <Navigation />
        </Paper>
        <Timeline />
      </React.Fragment>
    );
  }
}

export default App;
