import React, { Component } from "react";
import "./App.css";
import Navigation from "./Navigation";
import Timeline from "./Timeline";
import LandingPage from "./LandingPage";
import Paper from "@material-ui/core/Paper";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          {/* <Paper elevation={9}>
            <Navigation />
          </Paper> */}
          <LandingPage />
        </div>
        <Timeline />
      </React.Fragment>
    );
  }
}

export default App;
