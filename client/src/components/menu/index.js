import React from "react";
import ButtonLink from "../button-link";

export default function Menu() {
  return (
    <div className="header margin-bottom-medium">
      <ButtonLink text="Фильтр" icon="filter_list" />
      <ButtonLink text="Найти" icon="search" />
    </div>
  );
}
