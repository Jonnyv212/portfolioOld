import React, { Component } from "react";
import "./Main.css";
import github from "../Images/github2.jpg";
import linkedin from "../Images/linkedin2.png";
import email from "../Images/email6.png";
import email2 from "../Images/outlook2.png";
import source from "../Images/source.png";
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
            
            <div className="Pimg">
              <img
                src={pjImage}
                style={{ boxShadow: "0 1rem 1rem rgba(0, 0, 0, 0.2)" }}
              />
            </div>
            
              <div className="Pinfo">
                <div className="Ptitle">{pjName}</div>
                {pjDescription}
              </div>
          </div>

          <div className="Pbottom">
            <div className="PbottomLinks">
              <a href={pjPreview}>Demo</a>

              <a href={pjSource} target="_blank">
                <img src={source}/>Source
              </a>

            </div>
            <div className="Pstacks">
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

  arrayTime = ()=>{
    let hey = ["HTML ", "CSS ", "ReactJS "]
    return(hey)
  }
  skillBlock = (image, skillType, skillName) => {
    return(
        <div className="skillBlock">
          {image}
          <img src="skillImage"/>
          <h3 className="skillType">
            {skillType}
          </h3>
          <p className="skillName">
            {skillName}
          </p>
        </div>
    );
  }
  content = () => {
    return (
      <div>
        <div>
          Description of who I am, what I do. Blah blah blah.
          <div className="Resume">
          <h1>Resume download button here. pdf</h1>
          </div>
          {/* <hr /> */}
        </div>
        <div className="skills">
          <h1>Skills</h1>
          <div className="skillContainer">
            {this.skillBlock("Image here", "Frontend", "Skill Name Here")}
            {this.skillBlock("Image here", "Backend", "Skill Name Here")}
            {this.skillBlock("Image here", "Other", "Skill Name Here")}
          </div>
        </div>
        <div className="Projects">
          <h2>PROJECTS</h2>
          <Fade>{this.projectLister()}</Fade>
        </div>
      </div>
    );
  };

  footer = () => {
    return(
      <ul>
        <li>
          <a href="#home">
             <img src={github} />
           </a>
        </li>
        <li>
          <a href="#home">
             <img src={linkedin} />
          </a>
        </li>
        <li> 
          <a href="#home">
             <img src={email2} />
          </a>
        </li>
    </ul>
    )
  }
  render() {
    return (
      <div className="main">
        <div className="nav">{this.nav()}</div>

        <div>{this.header()}</div>

        <div className="content">{this.content()}</div>
        <div className="footer">
          {this.footer()}
        </div>
      </div>
    );
  }
}

export default Main;
