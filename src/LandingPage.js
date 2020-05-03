import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import "./LandingPage.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  return (
    <Paper elevation={24}>
      <div class="jumbotron jumbotron-fluid bg-dark">
        <div class="jumbotron-background">
          <img
            src="https://user-images.githubusercontent.com/55255943/80872975-015d9e00-8c7b-11ea-99b5-253a02329b45.jpg"
            class="blur"
          />
        </div>
        <div class="container text-dark">
          <div className={classes.root}>
            <Avatar
              className={classes.large}
              src="https://user-images.githubusercontent.com/55255943/80873427-12f47500-8c7e-11ea-870d-89248b0ed2e3.jpg"
            />
            <h1 class="display-3">Hello, I'm Nasimul.</h1>
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
