import React, { Component } from "react";
import "./About.css";
import Paper from "@material-ui/core/Paper";
import { Jumbotron } from "react-bootstrap";

export default function About() {
  return (
    <Paper elevation="10">
      <Jumbotron>
        <Paper elevation="10">
          <div class="jumbotron">
            <h1 class="display-4">About me</h1>
            <p
              class="lead"
              style={{ borderTop: "3px solid #708160", paddingTop: "20px" }}
            >
              Skilled in JavaScript, Java, C++, MySQL, and Full-Stack Web
              Development. Experience in Machine Learning Research with a
              Faculty of the University of Nebraska- Lincoln. Experienced Web
              Developer with a demonstrated history of designing interactive Web
              Applications. Actively looking for entry level Software
              Engineering or Web Developer positions.{" "}
            </p>
          </div>
        </Paper>
      </Jumbotron>
    </Paper>
  );
}
