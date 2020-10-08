import React from "react";
import MaterialIcon from "material-icons-react";

export default function ButtonLink({ href = "#", text = "", icon = "" }) {
  // console.log(href);
  return (
    <a href={href} className="btn">
      <MaterialIcon icon={icon} color="#212121" />
      <span>{text}</span>
    </a>
  );
}
