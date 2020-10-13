import React, { useRef } from "react";
import ButtonLink from "../ButtonLink.js";
import SearchPanes from "./../SearchPanel";
import MaterialIcon from "material-icons-react";
export default function Search() {
  return (
    <div className="search">
      <div className="header margin-bottom-tiny">
        <ButtonLink icon="filter_list" text="Фильтр" href="/filter" />
        <ButtonLink icon="schedule" text="Расписание" href="/" />
      </div>

      <SearchPanes />

      <div className="card card-search">
        <MaterialIcon icon="search" size={400} color="#eee" />
      </div>
    </div>
  );
}
