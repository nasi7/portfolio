import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <div className="main-body">
        <div className="rounded mb-5">
          <HashRouter>
            <Navbar sticky="top">
              <Navbar.Brand href="http://nasi7.github.io/portfolio">
                <img
                  src="https://user-images.githubusercontent.com/55255943/77374190-0d7b4500-6d38-11ea-805d-d5cbb98b5749.png"
                  width="70"
                  height="70"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Nav className="ml-auto">
                <Nav.Link href="#about">About me</Nav.Link>
                <Nav.Link href="#resume">Resume</Nav.Link>
                <Nav.Link
                  href="https://www.linkedin.com/in/nasimul-gani-24189512b/"
                  target="_blank"
                >
                  <i className="fa fa-linkedin "></i>
                </Nav.Link>
                <Nav.Link href="https://github.com/nasi7" target="_blank">
                  <i className="fa fa-github "></i>
                </Nav.Link>
              </Nav>
            </Navbar>
          </HashRouter>
        </div>
      </div>
    );
  }
}

export default Navigation;
