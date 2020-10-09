import React from "react";
import ButtonLink from "../button-link";
export default function Search() {
  return (
    <>
      <div className="card card-fullScreen"></div>

      <div className="header margin-bottom-medium">
        <ButtonLink text="Фильтор" />
        <button className="btn header__btn">
          <i className="material-icons">schedule</i>
          Расписание
        </button>
      </div>

      <input
        className="search"
        type="text"
        placeholder="Начните вводить текст..."
      />

      {/* <i className="material-icons enormoustLargeIcon">search</i> */}
    </>
  );
}
