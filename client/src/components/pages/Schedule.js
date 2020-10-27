import React from "react";
import Menu from "../Menu";
import CardDay from "../cardDay/CardDay";
import { Context } from "../../context";
import ButtonLink from "../ButtonLink";
import { capitalize } from "@material-ui/core";

function euroWeek(day) {
  return !day ? 6 : --day;
}

export default function Schedule() {
  return (
    <Context.Consumer>
      {({ scheduleData, filter, changeFilter }) => {
        const schedulePreparedData = Object.keys(scheduleData).map((key) => ({
          lectures: scheduleData[key][filter.even],
          weekday: capitalize(key),
        }));
        const days = schedulePreparedData.map((dayData) => {
          return <CardDay dayData={dayData} />;
        });
        const week = (
          <div className="week">
            <div className="week__header">
              <p className="week__title">Актуальное расписание</p>
              <p className="week__even-odd">
                {filter.even === "even" ? "ЧЕТНАЯ" : "НЕЧЕТНАЯ"} неделя
                <ButtonLink
                  text="изменить"
                  onClick={() => {
                    changeFilter(
                      filter.even === "even" ? "odd" : "even",
                      "even"
                    );
                  }}
                />
              </p>
            </div>
            {days}
          </div>
        );

        const todayDay = new Date().getDay();
        const todaySchedule = (
          <div className="margin-bottom-medium">
            <CardDay
              today={true}
              dayData={schedulePreparedData[euroWeek(todayDay)]}
            />
          </div>
        );

        return (
          <div className="basic-margins">
            <div className="header margin-bottom-tiny">
              <ButtonLink icon="filter_list" text="Фильтр" href="/filter" />
              <ButtonLink icon="search" text="Найти" href="/search" />
            </div>
            {todaySchedule}
            {week}
          </div>
        );
      }}
    </Context.Consumer>
  );
}
