import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Avatar from "@material-ui/core/Avatar";
import "./LandingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <Paper elevation={10}>
        <div class="jumbotron jumbotron-fluid bg-dark">
          <div class="jumbotron-background">
            <img
              src="https://user-images.githubusercontent.com/55255943/80872975-015d9e00-8c7b-11ea-99b5-253a02329b45.jpg"
              class="blur"
            />
          </div>

          <div class="container text-dark">
            <div>
              <h1 class="display-4">Hello, I'm Nasimul</h1>
            </div>
            <div class="theIcons">
              <a
                class="linkedin"
                href="https://www.linkedin.com/in/nasimul-gani-24189512b/"
                target="_blank"
              >
                <LinkedInIcon fontSize="large" color="action" />
              </a>
              <a href="https://github.com/nasi7" target="_blank">
                <GitHubIcon fontSize="large" color="action" />
              </a>
            </div>
          </div>
        </div>
      </Paper>
    );
  }
}

export default LandingPage;

//   <img src="https://user-images.githubusercontent.com/55255943/80872975-015d9e00-8c7b-11ea-99b5-253a02329b45.jpg"
//     height="697px"
//     width="1519px"
//   ></img>
