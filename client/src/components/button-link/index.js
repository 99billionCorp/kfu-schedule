import React from "react";
import MaterialIcon from "material-icons-react";

export default function ButtonLink({
  href = "#",
  text = "",
  icon = "",
  onClick,
}) {
  // console.log(href);
  return (
    <a href={href} className="btn" onClick={onClick}>
      <MaterialIcon icon={icon} color="#212121" />
      <span>{text}</span>
    </a>
  );
}
