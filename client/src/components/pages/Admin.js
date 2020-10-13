import React from "react";
import AdminMenu from "../admin-components/AdminМenu";
import SearchPanel from "../SearchPanel";

export default function Admin() {
  return (
    <div className="adminPage">
      <AdminMenu />
      <div className="adminPage-content">
        <div className="adminPage-content__info">
          <SearchPanel />
        </div>
      </div>
    </div>
  );
}
