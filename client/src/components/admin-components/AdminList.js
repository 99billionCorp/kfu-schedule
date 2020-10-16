import React, { useContext } from "react";
import { Context } from "../../context";

export default function AdminList({ arr = [], header = "" }) {
  const { setActiveCreate } = useContext(Context);

  const renderListItem = (arr) => {
    return arr.map((el, i) => (
      <a
        className="list-item"
        key={i}
        onClick={() => {
          setActiveCreate(i);
        }}
      >
        {el.name}
      </a>
    ));
  };

  return (
    <div className="admin__list">
      <p className="admin__menuHeader">{header}</p>
      <div className="admin__links">{renderListItem(arr)}</div>
    </div>
  );
}
