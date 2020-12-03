import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";

function About() {
  return (
    <>
      <div className="about">
        <div className="about-content">
          <h1>
            <Fade bottom cascade>
              About Me
            </Fade>
          </h1>
          <Fade bottom>
            <p>{data.abouttext}</p>
          </Fade>
          <Fade bottom>
            <div className="info">
              <div className="list">
                <label>Age:</label>
                <p>21 Yr</p>
              </div>
              <div className="list">
                <label>Phone:</label>
                <p>+977-9842611149</p>
              </div>
              <div class="list">
                <label>Residence:</label>
                <p>Nepal</p>
              </div>
              <div className="list">
                <label>Freelance:</label>
                <p>Available</p>
              </div>
            </div>
          </Fade>
        </div>
        {data.ShowAboutImage ? (
          <img
            src={data.aboutImage}
            style={{ width: "50%", borderRadius: 400 }}
            alt="about iamge"
          ></img>
        ) : null}
      </div>
      <Fade bottom>
        <div className="count-project">
          <div className="count-number">30+</div>
          <div className="project-text">
            <h3>Project Completed</h3>
            <p>
              Over the past two years, I have completed over 30 software
              projects including iOS/Android apps, and Web apps.
            </p>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default About;
