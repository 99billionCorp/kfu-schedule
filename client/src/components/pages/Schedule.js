import React from "react";
import Menu from "../Menu";
import CardDay from "../cardDay/CardDay";
import { Context } from "../../context";
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
        console.log(scheduleData)
        const days = scheduleData.map((dayData) => {
          return <CardDay key={uuid()} dayData={dayData} />
        })
        const week = (
          <div className="week">
            <div className="week__header">
              <p className="week__title">Актуальное расписание</p>
              <p className="week__even-odd">
                ЧЕТНАЯ неделя
                {/* <ButtonLink text="изменить" /> */}
                <button className="btn week__change">изменить</button>
              </p>
            </div>
            {days}
          </div>
        )

        const todayDay = new Date().getDay()
        // console.log(data[todayDay]);
        const todaySchedule = data ? (
          <div className="margin-bottom-large">
            <CardDay today={true} day={data[euroWeek(todayDay)]} />
          </div>
        ) : (
          true
        )

        return (
          <div className="basic-margins">
            <div className="header margin-bottom-tiny">
              <ButtonLink icon="filter_list" text="Фильтр" href="/filter" />
              <ButtonLink icon="search" text="Найти" href="/search" />
            </div>
            {data && todaySchedule}

            {data && week}
          </div>
        );
      }}
    </Context.Consumer>
  );
}
