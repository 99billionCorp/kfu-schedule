import React from "react";

export default function Info() {
  return (
    <div className="card card-fullScreen greeting">
      <h4>Привет!</h4>
      <p>
        Ты находешься на сайте расписания Матфака. Здесь ты можешь посмотреть
        расписание пар и узнать, в каких аудиториях проходит занятия у
        преподавателей
      </p>
      <input
        className="btn btn-dark btn-large filter__submit"
        // type="submit"
        value="Вернуться назад"
      />
    </div>
  );
}
