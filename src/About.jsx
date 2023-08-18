import React from "react";
import web from "../src/images/s1.png";

// import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = (props) => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
