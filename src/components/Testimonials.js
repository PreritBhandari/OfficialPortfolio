import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import yourdata from "../yourdata";
import Carousel from "react-elastic-carousel";

function Testimonials() {
  return (
    <div className="Testi">
      <h1>
        <Fade bottom cascade>
          Testimonials
        </Fade>
      </h1>
      <p> People I've worked with have said some nice things... </p>
      <Carousel initialActiveIndex={0} enableAutoPlay autoPlaySpeed={7000}>
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
      </Carousel>
    </div>
  );
}

export default Testimonials;
