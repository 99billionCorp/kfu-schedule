import React from "react";
// import "./index.scss";
import "./../../../scss/layouts/_card.scss";

export default function lesson({ lessonNum, lessonName, teacher, classroom }) {
  return (
    <div className="card__lesson">
      <div className="card__name ">{lessonName}</div>
      <div className="card__bottom">
        <div className="card__teacher">{teacher}</div>
        <div className="card__classroom">{classroom}</div>
      </div>
    </div>
  );
}
