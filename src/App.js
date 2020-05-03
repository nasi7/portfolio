import React, { Component } from "react";
import "./App.css";
import About from "./About";
import Skills from "./Skills";
import Timeline from "./Timeline";
import LandingPage from "./LandingPage";
import Paper from "@material-ui/core/Paper";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="main-body">
          <LandingPage />
          <About />
        </div>
        <Timeline />
        <Skills />
      </React.Fragment>
    );
  }
}

export default App;
