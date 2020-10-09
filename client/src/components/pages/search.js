import React, { useRef } from "react";
import ButtonLink from "../ButtonLink.js";
import SearchPanes from "./../SearchPanel";
export default function Search() {
  const inputRef = useRef(null);
  return (
    <i>
      <div className="header margin-bottom-tiny">
        <ButtonLink icon="filter_list" text="Фильтр" />
        <ButtonLink icon="schedule" text="Расписание" />
      </div>

      <SearchPanes />
      <div className="card card-search">
        <i className="material-icons enormoustLargeIcon">search</i>
      </div>
    </i>
  );
}
