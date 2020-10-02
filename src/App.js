import React from "react";
import "./scss/index.scss";
import Prepod from "./images/muranov.jpg";

function App() {
  return (
    <div className="App">
      <div className="card card-fullScreen">
        <form className="filter">
          <p className="filter__header">Где ты учишься?</p>
          <input
            className="input-form filter__input"
            type="text"
            value="Математика и информатика"
          />
          <input
            className="input-form filter__input"
            type="text"
            placeholder="Группа..."
          />
          <input
            className="btn btn-dark btn-large filter__submit"
            type="submit"
            value="Сохранить"
          />
        </form>

        <span class="material-icons icon-info">info</span>
      </div>
    </div>
  );
}

export default App;
