import React from "react";
import { LinearProgress } from "@mui/material";
import "./Skills.css";

function SkillsCard({ name, percentage }) {
  return (
    <>
      <div className="SkillsCard">
        <h5>{name}</h5>
        <LinearProgress variant="determinate" value={percentage} />
      </div>
    </>
  );
}

export default SkillsCard;
