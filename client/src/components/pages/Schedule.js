import React from "react";
import Menu from "../Menu";
import CardDay from "../cardDay/CardDay";
import {Context} from "../../context";
import ButtonLink from "../ButtonLink";
import uuid from "react-uuid";

function euroWeek(day) {
   return day === 0 ? 6 : day - 1;
}

export default function Schedule() {
   return (
      <Context.Consumer>
         {(data) => {
            const scheduleData = Object.keys(data).map(key => ({'lectures': data[key]['odd'], 'weekday': key}))
            const days = scheduleData.map((dayData) => {
               return <CardDay key={uuid()} dayData={dayData}/>
            })
            const week = (
               <div className="week">
                  <div className="week__header">
                     <p className="week__title">Актуальное расписание</p>
                     <p className="week__even-odd">
                        ЧЕТНАЯ неделя
                        <ButtonLink text="изменить"/>
                     </p>
                  </div>
                  {days}
               </div>
            )

            const todayDay = new Date().getDay()
            const todaySchedule = (
               <div className="margin-bottom-medium">
                  <CardDay today={true} dayData={scheduleData[euroWeek(todayDay)]}/>
               </div>
            )

            return (
               <div className="basic-margins">
                  <div className="header margin-bottom-tiny">
                     <ButtonLink icon="filter_list" text="Фильтр" href="/filter"/>
                     <ButtonLink icon="search" text="Найти" href="/search"/>
                  </div>
                  {todaySchedule}
                  {week}
               </div>
            );
         }}
      </Context.Consumer>
   );
}
