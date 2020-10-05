import React from "react";
import "./index.scss";
export default function lesson({ lessonNum, lessonName, teacher, classroom }) {
  return (
    <div className="lesson">
      <div className="lesson__info">
        <div className="lesson__name ">{lessonName}</div>
        <div className="lesson__teacher">{teacher}</div>
      </div>
      <div className="lesson__classroom">{classroom}</div>
    </div>
  );
}
