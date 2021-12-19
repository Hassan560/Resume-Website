import React from "react";
import "./About.css";

function About() {
  return (
    <div className="About">
      <h2>About</h2>
      <p>
        My name is Syed Hassan Hussain. I live in Saddar. I have done the
        Intermediate from S.M Commerce College. Beside that, I have done Ms
        office. while I am doing the most Cutting Edge Technolgy{" "}
        <strong>Web and Mobile Hybrid Development</strong> from BMJ institute.
      </p>
      <hr />
      <h4>Personal Info:</h4>
      <div className="Personal__container">
        <div className="Personal__first">
          <h5>Phone:</h5>
          <p>0314:2329334</p>
        </div>
        <div className="Personal__second">
          <h5>Email:</h5>
          <p>syedhassanhussain001@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default About;
