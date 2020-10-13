import React, {useState} from "react";
import "./../../scss/layouts/_card.scss";
import Lesson from "./Lesson";
import ButtonLink from "../ButtonLink";
import uuid from "react-uuid";

const callSchedule = [
   {lessonName: "8:00 - 9:00"},
   {lessonName: "9:50 - 11:20"},
   {lessonName: "11:30 - 13:00"},
];

export default function CardDay({today = false, dayData = {}}) {
   const [isTodaySchedule, setIsTodaySchedule] = useState(true)

   const displayLesson = ({classroom, teacher, lectureName}, index) => {
      return lectureName && (
         <Lesson
            key={uuid()}
            lessonName={lectureName.toLowerCase()}
            classroom={classroom}
            lessonNum={index + 1}
            teacher={teacher}
         />
      )
   }

   // const todaySchedule = isTodaySchedule
   //   ? day["lectures"].map(displayLesson)
   //   : callSchedule.map(displayLesson)

   const todaySchedule = Object.keys(dayData['lectures']).map(key => {
      return displayLesson(dayData['lectures'][key])
   })

   const date = new Date()

   const weekDay = (day) => {
      return day.weekday ? day.weekday : "ВЫХОДНОЙ!"
   }

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
        <span className="card__weekDay">
          {(today ? "Сегодня " : "") + weekDay(dayData)}
        </span>
            <span className="card__date">{cardDate(date)}</span>
         </div>
         <div className="lessons">{todaySchedule}</div>
         {today && toggleScheduleType()}
      </div>
   );
}
