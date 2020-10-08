import React from "react";
import "./../../scss/layouts/_card.scss";
import Lesson from "./lesson/index";
import ButtonLink from "./../button-link";
import uuid from "react-uuid";

export default function CardDay({ today = false, day }) {
  const weekDay = day["lessons"].map(
    ({ lessonName, classroom, teacher }, index) => {
      return (
        <Lesson
          key={uuid()}
          lessonName={lessonName}
          classroom={classroom}
          lessonNum={index + 1}
          teacher={teacher}
        />
      );
    }
  );

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
          <ButtonLink text="Расписание занятий на сегодня" />
        </div>
      )}
    </div>
  );
}
