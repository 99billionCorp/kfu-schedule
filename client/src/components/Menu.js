import React from "react";
import ButtonLink from "./ButtonLink.js";

export default function Menu() {
  return (
    <div className="header margin-bottom-medium">
      <ButtonLink text="Фильтр" icon="filter_list" />
      <ButtonLink text="Найти" icon="search" />
    </div>
  );
}
