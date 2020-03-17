import React, { Component } from "react";
import samplePDF from "./resume.pdf";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
  render() {
    return (
      <div className="container">
        <hr />
        <blockquote class="blockquote">
          Click{" "}
          <a href="https://github.com/nasi7/portfolio/files/4341318/resume.pdf">
            here
          </a>{" "}
          to download a pdf version of my Resume.{" "}
        </blockquote>
        <hr />
        <Document file={samplePDF} onLoadSuccess={this.onDocumentLoadSuccess}>
          <Page pageNumber={1} />
        </Document>
      </div>
    );
  }
}

export default Resume;
