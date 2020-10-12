import React from "react";
import MaterialIcon from "material-icons-react";
import ButtonLink from "../ButtonLink";
import { Link } from "react-router-dom";
// import { Autocomplete } from "material-icons-react";

export function InputFilter() {
  return (
    <form className="filter" action="">
      <p className="filter__header">Где ты учишься?</p>
      {/* <Autocomplete /> */}
      <input
        className="input-form filter__input"
        readOnly={true}
        value="Математики и информатики"
        type="text"
      />
      <input
        className="input-form filter__input"
        placeholder="Курс..."
        type="text"
      />
      <input
        className="input-form filter__input"
        placeholder="Группа..."
        type="text"
      />

      <input
        className="btn btn-dark btn-large filter__submit"
        type="submit"
        value="Сохранить"
      />
    </form>
  );
}

export default function Filter() {
  return (
    <div className="card card-fullScreen">
      <InputFilter />

      <Link to="/info">
        <div className="icon-info">
          <MaterialIcon icon="info" />
        </div>
      </Link>
    </div>
  );
}
