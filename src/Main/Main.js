import React, { Component } from "react";
import "./Main.css";
import github from "../Images/github2.jpg";
import linkedin from "../Images/linkedin2.png";
import email from "../Images/email6.png";
import PJdata from "../Main/Main.json";
import Fade from "react-reveal/Fade";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // projects: []
      //Adds array of objects from Main.json to projects state to call upon any object within the json.
    };
  }

  componentDidMount() {}

  //Navigation bar at the top of the page. Fixed positioning
  nav = () => {
    return (
      <div>
        <p>Jonathan Vega</p>
        <ul>
          <li>
            <a href="#home">About</a>
          </li>
          <li>
            <a href="#news">Projects</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    );
  };

  //Header below the nav
  header = () => {
    return (
      <div className="header">
        <div className="headername">
          <h1>Jonathan Vega</h1>
          <p>Software Developer</p>
        </div>
        <div className="list">
          <ul>
            <li>
              <a href="#home">
                <img src={github} />
              </a>
            </li>
            <li>
              <a href="#news">
                <img src={linkedin} />
              </a>
            </li>
            <li>
              <a href="mailto:jonnyv212@hotmail.com?Subject=Hello">
                <img src={email} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  //Generates a project template for the portfolio function.
  projects = (pjName, pjImage, pjDescription, pjPreview, pjSource) => {
    return (
      <div className="Pcontainer">
        <div className="Pcontent">
          <div className="Ptitle">{pjName}</div>
          <img
            src={pjImage}
            style={{ boxShadow: "0 1rem 1rem rgba(0, 0, 0, 0.2)" }}
            height="250"
            width="450"
          />
          <div className="Plinks">
            <a href={pjPreview}> Preview</a>
            <a href={pjSource} target="_blank">
              Source
            </a>
          </div>
        </div>

        <div className="Pinfo">
          <div className="Pdescription">{pjDescription}</div>
          <div className="Ptechnologies">
            <ul>
              <li>ReactJS</li>
              <li>JavaScript </li>
            </ul>
          </div>
        </div>

        {/* <hr /> */}
      </div>
    );
  };

  //Generates a project based on the JSON data.
  //Takes the JSON data and applies it from a loop to the projects function.
  projectLister = () => {
    let pjIndex = PJdata.length;
    let pjFull = [];
    for (let i = 0; i < pjIndex; i++) {
      pjFull.push(
        this.projects(
          PJdata[i].projectName,
          require("../" + PJdata[i].image),
          PJdata[i].description,
          PJdata[i].preview,
          PJdata[i].source
        )
      );
    }

    return pjFull;
  };
  content = () => {
    return (
      <div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus
          sagittis dolor, vitae fermentum purus. Duis et massa eget arcu rutrum
          egestas ut id tortor. Integer maximus imperdiet sem, ullamcorper
          feugiat turpis dictum nec. Donec bibendum, nisl nec tincidunt dapibus,
          lacus neque cursus augue, in finibus nulla nunc quis nibh. Phasellus
          eu blandit elit. Praesent pellentesque elit erat, id laoreet purus
          lobortis non. Fusce scelerisque risus sed sapien tempor, ac
          sollicitudin lacus commodo. Integer congue, nunc malesuada ornare
          condimentum, dui est lobortis nulla, et malesuada mi velit in felis.
          Phasellus pretium posuere massa id hendrerit. Nunc quis erat nibh. Sed
          dui eros, hendrerit at sem in, tincidunt iaculis tortor. Aenean quis
          massa quis odio facilisis blandit sit amet in massa. Sed tincidunt, mi
          a interdum consectetur, nulla augue porttitor ligula, hendrerit
          facilisis ligula tortor at enim. Donec consequat, lacus vel porta
          maximus, leo mi laoreet tellus, quis bibendum metus dolor in mauris.
          <hr />
        </div>

        <div className="Projects">
          <h2>PROJECTS</h2>
          <Fade>{this.projectLister()}</Fade>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="main">
        <div className="nav">{this.nav()}</div>

        <div>{this.header()}</div>

        <div className="content">{this.content()}</div>
      </div>
    );
  }
}

export default Main;
