import React, { Component } from "react";
import "./Box.css";
import { Navbar, Nav } from "react-bootstrap";

function Box(props) {
  return (
    <button class="box">
      {/* <a href={props.link}>{props.text}</a> */}
      <Nav.Link href={props.link}>{props.text}</Nav.Link>
    </button>
  );
}

export default Box;
