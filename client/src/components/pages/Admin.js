import React, { useState, useContext } from "react";
import AdminMenu from "../admin-components/AdminМenu";
import CreateStructuralUnit from "../admin-components/AdminBlocks/CreateStructuralUnit";
import CreateSubject from "../admin-components/AdminBlocks/CreateSubject";
import CreateGroupOfStudents from "../admin-components/AdminBlocks/CreateGroupOfStudents";
import CreatePrepod from "../admin-components/AdminBlocks/CreatePrepod";
import { Context } from "../../context";

export default function Admin() {
  const [activeCreate, setActiveCreate] = useState(0);

  const createList = [
    <CreateSubject />,
    <CreateGroupOfStudents />,
    <CreatePrepod />,
    <CreateStructuralUnit />,
  ];

  return (
    <Context.Provider
      value={{
        setActiveCreate,
      }}
    >
      <div className="admin">
        <AdminMenu />
        <div className="admin__content">{createList[activeCreate]}</div>
      </div>
    </Context.Provider>
  );
}
