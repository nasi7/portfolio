import React, { Component } from "react";
import "./Skills.css";
import Paper from "@material-ui/core/Paper";
import { Jumbotron } from "react-bootstrap";

export default function Skills() {
  return (
    <Paper elevation="10">
      <Jumbotron>
        <Paper elevation="10">
          <div class="jumbotron">
            <div class="row" id="heading">
              <h1 class="display-4">Skills</h1>
            </div>
            <div
              class="row"
              id="leading"
              style={{ borderTop: "3px solid #708160", paddingTop: "20px" }}
            >
              <p class="lead">Technologies and Languages I am proficient in:</p>
            </div>
            <div class="row">
              <div class="column">
                <i class="devicon-java-plain-wordmark colored"></i>
              </div>
              <div class="column">
                <i class="devicon-javascript-plain"></i>
              </div>
              <div class="column">
                <i class="devicon-react-original-wordmark colored"></i>
              </div>
              <div class="column">
                <i class="devicon-angularjs-plain colored"></i>
              </div>
              <div class="column">
                <i class="devicon-nodejs-plain-wordmark colored"></i>
              </div>
              <div class="column">
                <i class="devicon-express-original-wordmark colored"></i>
              </div>
              <div class="column">
                <i class="devicon-mysql-plain-wordmark colored"></i>
              </div>
              <div class="column">
                <i class="devicon-mongodb-plain-wordmark colored"></i>
              </div>
              <div class="column">
                <i class="devicon-bootstrap-plain-wordmark colored"></i>
              </div>
              <div class="column">
                <i class="devicon-d3js-plain colored"></i>
              </div>
            </div>
          </div>
        </Paper>
      </Jumbotron>
    </Paper>
  );
}
