import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
          </div>
        );
      });
      var skills = this.props.data.skills.map(function (skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row achievement">
          <div className="three columns header-col">
            <h1>
              <span>Achievement</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <ul>
              <li>
                1 =>{" "}
                <span className="bold" style={{ fontWeight: "bolder" }}>
                  {" "}
                  30th/30K{" "}
                </span>{" "}
                in{" "}
                <span
                  className="bold"
                  style={{ fontWeight: "600", fontFamily: "fontello" }}
                >
                  CodeChef August Long Challenge
                </span>
              </li>
              <li>
                2 =>{" "}
                <span className="bold" style={{ fontWeight: "bolder" }}>
                  373th/17K{" "}
                </span>
                in{" "}
                <span
                  className="bold"
                  style={{ fontWeight: "600", fontFamily: "fontello" }}
                >
                  Codeforces Round 700
                </span>
              </li>
              <li>
                3 =>{" "}
                <span className="bold" style={{ fontWeight: "bolder" }}>
                  Expert Coder{" "}
                </span>{" "}
                at{" "}
                <span
                  className="bold"
                  style={{ fontWeight: "600", fontFamily: "fontello" }}
                >
                  Codeforces(Rating: 1644)
                </span>
              </li>
              <li>
                4 =>{" "}
                <span className="bold" style={{ fontWeight: "bolder" }}>
                  {" "}
                  4 Star{" "}
                </span>{" "}
                at{" "}
                <span
                  className="bold"
                  style={{ fontWeight: "600", fontFamily: "fontello" }}
                >
                  CodeChef(Rating: 1872)
                </span>
              </li>
              <li>
                5 =>{" "}
                <span className="bold" style={{ fontWeight: "bolder" }}>
                  5 Star{" "}
                </span>{" "}
                in{" "}
                <span
                  className="bold"
                  style={{ fontWeight: "600", fontFamily: "fontello" }}
                >
                  Problem Solving at HackerRank
                </span>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
        <Divider style={{ margin: "30px 250px" }} />
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
