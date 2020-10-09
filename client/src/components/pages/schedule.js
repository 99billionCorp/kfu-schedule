import React from "react";
import Menu from "../menu";
import CardDay from "../card_schedule";
import { Context } from "../../context";
import ButtonLink from "./../button-link";
import uuid from "react-uuid";

export default function Schedule() {
  return (
    <Context.Consumer>
      {(data) => {
        console.log(data)
        const days = data
          ? data.map((day) => {
              return <CardDay key={uuid()} day={day} />;
            })
          : false;

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
        );

        const todayDay = new Date().getDay();
        const todaySchedule = data ? (
          <div className="margin-bottom-large">
            <CardDay today={true} day={data[todayDay]} />
          </div>
        ) : (
          true
        );

        return (
          <>
            <Menu />
            {data && todaySchedule}

            {data && week}
          </>
        );
      }}
    </Context.Consumer>
  );
}
