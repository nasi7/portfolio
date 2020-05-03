import React, { Component } from "react";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import StarIcon from "@material-ui/icons/Star";
import { Jumbotron } from "react-bootstrap";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class Timeline extends Component {
  render() {
    return (
      <React.Fragment>
        <Paper elevation="10">
          <Jumbotron>
            <Paper elevation="10">
              <div class="jumbotron">
                <h1
                  class="display-4"
                  style={{
                    borderBottom: "3px solid #708160",
                    paddingBottom: "20px",
                  }}
                >
                  Experiences
                </h1>

                <VerticalTimeline>
                  <VerticalTimelineElement
                    className="vertical-timeline-element"
                    date="2019 - Present"
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    icon={<WorkIcon />}
                  >
                    <div>
                      <Chip label="React" />
                      <Chip label="Node" />
                      <Chip label="SQL" />
                    </div>
                    <h3 className="vertical-timeline-element-title">
                      Web Developer
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">DMSi</h4>
                    <h5 className="vertical-timeline-element-subtitle">
                      Senior Design Project
                    </h5>
                    <p>
                      Restructured existing Excel style BOM (Bill of Materials)
                      creation by building a Web Application that can allow
                      process to be completed 3-6 months sooner than before
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2017"
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    icon={<WorkIcon />}
                  >
                    <div>
                      <Chip label="MATLAB" />
                      <Chip label="Machine Learning" />
                    </div>
                    <h3 className="vertical-timeline-element-title">
                      Undergraduate Research Assistant
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      University of Nebraska- Lincoln
                    </h4>
                    <p>
                      Designed a Machine Learning Project by using
                      classification and regression techniques on past data from
                      700 student records to predict a student’s final grade in
                      a class based on previous grades
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2016 - Present"
                    iconStyle={{
                      background: "rgb(233, 30, 99)",
                      color: "#fff",
                    }}
                    icon={<WorkIcon />}
                  >
                    <div>
                      <Chip label="Java" />
                      <Chip label="SQL" />
                      <Chip label="MATLAB" />
                    </div>
                    <h3 className="vertical-timeline-element-title">
                      Undergraduate Teaching Assistant
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      University of Nebraska- Lincoln
                    </h4>
                    <p>
                      Mentored students in Advanced Java, SQL, and MATLAB course
                      by providing help with assignments that allowed them to
                      apply learned concepts in a computer lab
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2014 - 2016"
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    icon={<WorkIcon />}
                  >
                    <div>
                      <Chip label="AngularJS" />
                      <Chip label="PHP" />
                    </div>
                    <h3 className="vertical-timeline-element-title">
                      Web Development Intern (Remote)
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      moviesaints.com
                    </h4>
                    <p>
                      Collaborated on coding front-end User Interface for movie
                      streaming website
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Fall 2015"
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    icon={<SchoolIcon />}
                  >
                    <Chip label="B.S." />
                    <Chip label="Computer Science" />
                    <h3 className="vertical-timeline-element-title">
                      Started Bachelor's Degree
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      University of Nebraska- Lincoln
                    </h4>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2014"
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    icon={<SchoolIcon />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Graduated from High School
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      St. Augustine's Day School
                    </h4>
                    <h5 className="vertical-timeline-element-subtitle">
                      Kolkata, India
                    </h5>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    iconStyle={{
                      background: "rgb(16, 204, 82)",
                      color: "#fff",
                    }}
                    icon={<StarIcon />}
                  />
                </VerticalTimeline>
              </div>
            </Paper>
          </Jumbotron>
        </Paper>
      </React.Fragment>
    );
  }
}

export default Timeline;
