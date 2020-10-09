import React from "react";

export default function Lesson({ lessonNum, lessonName, teacher, classroom }) {
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
