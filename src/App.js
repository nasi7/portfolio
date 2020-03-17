import React, { Component } from "react";
import "./App.css";
import { Router, Route, NavLink, HashRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./Home";
import Experience from "./Experience";
import GeneralInfo from "./GeneralInfo";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HashRouter>
          <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">Nasimul Gani</Navbar.Brand>
            <Nav className="mr-auto">
              {/* <NavLink to="/home">Home</NavLink>
              <NavLink to="/experience">Experience</NavLink>
              <NavLink to="/generalinfo">General Info</NavLink> */}
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#generalinfo">General Info</Nav.Link>
            </Nav>
          </Navbar>
          <div>
            <Route path="/home" component={Home} />
            <Route path="/experience" component={Experience} />
            <Route path="/generalinfo" component={GeneralInfo} />
          </div>
        </HashRouter>
      </React.Fragment>
    );
  }
}

export default App;
