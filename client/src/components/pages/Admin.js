import React from "react";
import AdminMenu from "../admin-components/AdminМenu";
import CreateStructuralUnit from "../admin-components/AdminBlocks/CreateStructuralUnit";

export default function Admin() {
  return (
    <div className="admin">
      <AdminMenu />
      <div className="admin__content">
        <CreateStructuralUnit />
      </div>
    </div>
  );
}
