import React from "react";

const renderListItem = (arr) => {
  return arr.map((el) => <p>{el}</p>);
};

export default function AdminList({ arr = [], header = "" }) {
  return (
    <div className="admin__list">
      <p className="admin__menuHeader">{header}</p>
      <div className="admin__links">{renderListItem(arr)}</div>
      <div className="admin__links"></div>
    </div>
  );
}
