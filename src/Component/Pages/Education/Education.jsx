import React from "react";
import "./Education.css";

function Education() {
  return (
    <div className="Education">
      <h2>Education</h2>
      <div className="Education__body">
        <p>2017-2018</p>
        <hr />
        <div className="Education__rightOne">
          <h4>Matric:</h4>
          <p>
            I have done the <strong>Matriculation</strong> with
            <strong> Commerce </strong> from
            <strong> St Paul's English High School</strong> Saddar,Karachi.
          </p>
        </div>
        <p>2018-2019</p>
        <hr />
        <div className="Education__rightOne">
          <h4>Inter:</h4>
          <p>
            I have done the <strong>Intermediate</strong> with
            <strong> Commerce </strong> from
            <strong> S.M Commerce College</strong> Saddar,Karachi.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Education;
