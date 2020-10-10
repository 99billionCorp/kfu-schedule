import React from "react";
import MaterialIcon from "material-icons-react";

export default function SearchPanel() {
  return (
    <div className="searchPanel">
      <MaterialIcon icon="search" />
      <input
        className="search-input"
        type="text"
        autoFocus="true"
        placeholder="Начните вводить текст..."
      />
    </div>
  );
}
