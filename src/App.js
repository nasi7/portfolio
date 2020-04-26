import React, { Component } from "react";
import "./App.css";
import Navigation from "./Navigation";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <div class="main-body"></div>
      </React.Fragment>
    );
  }
}

export default App;
