import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";
function Skills() {
  return (
    <div>
      <div className="skill-box">
        <Fade bottom cascade>
          <h1 style={{ color: "white" }}> Skills</h1>
        </Fade>
        <p>
          <h3>Today is the Mirror For Tomorrow</h3>
        </p>
      </div>
      <Fade bottom cascade>
        <div className="skillset">
          {data.skills.map((skills) => (
            <div className="skill-inner">
              <div
                style={{
                  width: `${skills.familiar}%`,
                  backgroundColor: "teal",
                  borderRadius: "90vh",
                  height: 80,
                }}
                className="skill-one"
              >
                <br />
                <h2>{skills.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
}

export default Skills;
