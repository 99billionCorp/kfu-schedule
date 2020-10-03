import React from "react";
import "./scss/index.scss";
// import Prepod from "./images/muranov.jpg";
import { useHttp } from './hooks/http.hook'

function App() {
  const { request } = useHttp()
  request('/api', 'POST', {test: 'test'}, {header: 'hhhhhh'}).then(d=>{
    console.log(d)
  })
  return (
    <div className="App">
      <div className="header margin-bottom-medium">
        <button className="btn header__btn">
          <i className="material-icons">filter_list</i>
          Фильтр
        </button>

        <button className="btn header__btn">
          <i className="material-icons">schedule</i>
          Расписание
        </button>

        <div className="card card-search">
          <input
            className="search"
            type="text"
            placeholder="Начните вводить текст..."
          />

          <i className="material-icons enormoustLargeIcon">search</i>
        </div>
      </div>
    </div>
  );
}

export default App;
