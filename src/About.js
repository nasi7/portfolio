import React, { Component } from "react";
import "./About.css";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import GetAppIcon from "@material-ui/icons/GetApp";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Jumbotron, Row } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <Paper elevation="10">
      <Jumbotron>
        <Paper elevation="10">
          <div class="jumbotron">
            <h1
              class="display-4"
              style={{
                borderBottom: "3px solid #708160",
                paddingBottom: "10px",
              }}
            >
              About me
            </h1>
            <p class="lead">
              {/* <p class="name">Nasimul Gani</p>
              <p class="title">Web Developer</p> */}
              Skilled in JavaScript, Java, C++, MySQL, and Full-Stack Web
              Development. Experience in Machine Learning Research with a
              Faculty of the University of Nebraska- Lincoln. Experienced Web
              Developer with a demonstrated history of designing interactive Web
              Applications. Actively looking for entry level Software
              Engineering or Web Developer positions.{" "}
            </p>
            <Button
              variant="contained"
              size="large"
              color="primary"
              endIcon={<GetAppIcon />}
              className={classes.margin}
              href="https://github.com/nasi7/portfolio/files/4571037/resume.pdf"
            >
              Download Resume
            </Button>
            <Button
              variant="contained"
              size="large"
              color="primary"
              endIcon={<MailOutlineIcon />}
              href="mailto:nasimulshaikh25@gmail.com"
              className={classes.margin}
            >
              Hire me
            </Button>
          </div>
        </Paper>
      </Jumbotron>
    </Paper>
  );
}
