import React, { useState } from "react";
import "./../../scss/layouts/_card.scss";
import Lesson from "./Lesson";
import ButtonLink from "../ButtonLink";
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

  const todaySchedule = isTodaySchedule
    ? day["lessons"].map(displayLessons)
    : callSchedule.map(displayLessons);

  const date = new Date();

  const weekDay = (day) => {
    return "Сегодня " + (day.weekday ? day.weekday : "ВЫХОДНОЙ!");
  };

  const cardDate = (date) => {
    return `${
      (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
      "." +
      (date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth())
    }`;
  };

  const toggleScheduleType = () => (
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
  );

  return (
    <div className="card  margin-bottom-small">
      <div className="card__header">
        <span className="card__weekDay">{weekDay(day)}</span>
        <span className="card__date">{cardDate(date)}</span>
      </div>
      <div className="lessons">{todaySchedule}</div>
      {today && toggleScheduleType()}
    </div>
  );
}
