import React from "react";
import AdminMenu from "../admin-components/AdminМenu";
import CreateStructuralUnit from "../admin-components/AdminBlocks/CreateStructuralUnit";
import CreateSubject from "../admin-components/AdminBlocks/CreateSubject";
import CreateGroupOfStudents from "../admin-components/AdminBlocks/CreateGroupOfStudents";
import CreatePrepod from "../admin-components/AdminBlocks/CreatePrepod";

export default function Admin() {
  return (
    <div className="admin">
      <AdminMenu />
      <div className="admin__content">
        <CreateStructuralUnit />
        <CreateSubject />
        <CreateGroupOfStudents />
        <CreatePrepod />
      </div>
    </div>
  );
}
