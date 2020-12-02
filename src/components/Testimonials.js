import React from "react";
import Fade from "react-reveal/Fade";
import yourdata from "../yourdata";

function Testimonials() {
  return (
    <div className="Testi">
      <h1>
        <Fade bottom cascade>
          Testimonials
        </Fade>
      </h1>
      <p> People I've worked with have said some nice things... </p>
      {yourdata.testimonials.map((testimonials) => (
        <div class="testimonials">
          <div>
            <img src={testimonials.image} alt="Testimonials" />
            <p>{testimonials.describe}</p>
            <h3>{testimonials.name}</h3>
            <h4>{testimonials.whoami}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Testimonials;
