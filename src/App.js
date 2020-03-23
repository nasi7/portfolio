import React, { Component } from "react";
import "./App.css";
import { Router, Route, NavLink, HashRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import About from "./About";
import Resume from "./Resume";

class App extends Component {
  render() {
    return (
      <div className="container">
        <HashRouter>
          <Navbar bg="light" sticky="top">
            <Navbar.Brand href="http://nasi7.github.io/portfolio">
              <img
                src="https://user-images.githubusercontent.com/55255943/77374190-0d7b4500-6d38-11ea-805d-d5cbb98b5749.png"
                width="100"
                height="100"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="#about">About me</Nav.Link>
              <Nav.Link href="#resume">Resume</Nav.Link>
              <Nav.Link href="https://github.com/nasi7" target="_blank">
                <i className="fa fa-github fa-lg"></i>
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/nasimul-gani-24189512b/"
                target="_blank"
              >
                <i className="fa fa-linkedin fa-lg"></i>
              </Nav.Link>
            </Nav>
          </Navbar>
          <div>
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
