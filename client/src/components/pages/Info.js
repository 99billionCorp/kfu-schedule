import React from "react";

export default function Info() {
  return (
    <div className="card card-fullScreen">
      <div className="greeting">
        <p className="greeting__header">Привет!</p>
        <p className="greeting__content">
          Ты находешься на сайте расписания Матфака. Здесь ты можешь посмотреть
          расписание пар и узнать, в каких аудиториях проходит занятия у
          преподавателей
        </p>
        <input
          className="btn btn-dark  btn-padding-no filter__submit"
          // type="submit"
          value="Вернуться назад"
        />
      </div>
    </div>
  );
}
