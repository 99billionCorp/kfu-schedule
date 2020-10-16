import React, { useReducer } from "react";
import SearchPanel from "../SearchPanel";
import InputText from "../admin-components/inputs/InputText";
import MenuDropdown from "../admin-components/inputs/MenuDropdown";
import AdminList from "../admin-components/AdminList";

const subdivision = ["Таврическая академия им. В.И. Вернадского", "КИПУ"];

// const relativePath = (location) => ({
//   ...location,
//   pathname
// })

const createList = [
  {
    name: "Предмет",
    link: "/admin/subject",
  },
  {
    name: "Группу студентов",
    link: "/admin/studentGroup",
  },
  {
    name: "Преподавателя",
    link: "/admin/teacher",
  },
  // {
  //   name: "Аудиторию",
  //   link: "/admin/class",
  // },
  // {
  //   name: "Корпус",
  //   link: "/admin/wing",
  // },
  // {
  //   name: "Факультет",
  //   link: "/admin/faculty",
  // },
  {
    name: "Подразделение",
    link: "/admin/subdivision",
  },
];

const listsList = [
  {
    name: "Предметы",
    link: "",
  },
  {
    name: "Группы студентов",
    link: "",
  },
  {
    name: "Преподаватели",
    link: "",
  },
  {
    name: "Аудитории",
    link: "",
  },
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
