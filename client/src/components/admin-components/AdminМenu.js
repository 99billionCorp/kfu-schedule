import React from "react";
import SearchPanel from "../SearchPanel";
import InputText from "../admin-components/inputs/InputText";
import MenuDropdown from "../admin-components/inputs/MenuDropdown";
import AdminList from "../admin-components/AdminList";

const subdivision = ["Таврическая академия им. В.И. Вернадского", "КИПУ"];

const createList = [
  "Предмет",
  "Группу студентов",
  "Преподавателя",
  "Аудиторию",
  "Корпус",
  "Факультет",
  "Подразделение",
];

const listsList = [
  "Предметы",
  "Группы студентов",
  "Преподаватели",
  "Аудитории",
];

export default function AdminMenu() {
  return (
    <div className="admin__menu">
      <div className="card admin__card">
        <AdminList arr={createList} header="Создать" />
      </div>

      <div className="card admin__card">
        <MenuDropdown arr={subdivision} />
      </div>

      <div className="card admin__card">
        <MenuDropdown arr={subdivision} />
      </div>

      <div className="card admin__card">
        <AdminList arr={listsList} header="Списки" />
      </div>

      <div className="card admin__card">
        <a href="#">Формирование расписания</a>
      </div>
    </div>
  );
}
