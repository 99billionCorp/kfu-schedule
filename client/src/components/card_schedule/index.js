import React, { useState } from "react";
import "./../../scss/layouts/_card.scss";
import Lesson from "./lesson/index";
import ButtonLink from "./../button-link";
import uuid from "react-uuid";

const callSchedule = [
  { lessonName: "8:00 - 9:00" },
  { lessonName: "9:50 - 11:20" },
  { lessonName: "11:30 - 13:00" },
];

export default function CardDay({ today = false, day = { lessons: [] } }) {
  const [isTodaySchedule, setIsTodaySchedule] = useState(true);

  const displayLessons = ({ lessonName, classroom, teacher }, index) => {
    return (
      <Lesson
        key={uuid()}
        lessonName={lessonName}
        classroom={classroom}
        lessonNum={index + 1}
        teacher={teacher}
      />
    );
  };

  const weekDay = isTodaySchedule
    ? day["lessons"].map(displayLessons)
    : callSchedule.map(displayLessons);

  // console.log(day);

  const date = new Date();
  return (
    <div className="card  margin-bottom-small">
      <div className="card__header">
        <span className="card__weekDay">
          {(today ? "Сегодня " : "") + day["weekday"]}
        </span>
        <span className="card__date">
          {`${
            (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
            "." +
            (date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth())
          }`}
        </span>
      </div>
      <div className="lessons">{weekDay}</div>
      {today && (
        <div className="btn-card">
          <ButtonLink
            text={
              isTodaySchedule
                ? "Расписание звонков"
                : "Расписание занятий на сегодня"
            }
            onClick={() => {
              setIsTodaySchedule(!isTodaySchedule);
            }}
          />
        </div>
      )}
    </div>
  );
}
