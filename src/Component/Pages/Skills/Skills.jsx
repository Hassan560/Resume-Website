import React from "react";
import "./Skills.css";
import SkillsCard from "./SkillsCard";

function Skills() {
  return (
    <div className="Skills">
      <h2>Skills</h2>
      <div className="Skills__Card">
        <SkillsCard name="Html" percentage="80" />
        <SkillsCard name="Css" percentage="60" />
        <SkillsCard name="Bootstrap" percentage="60" />
        <SkillsCard name="JavaScript" percentage="55" />
        <SkillsCard name="Es6" percentage="55" />
        <SkillsCard name="React & Redux" percentage="50" />
      </div>
    </div>
  );
}

export default Skills;
