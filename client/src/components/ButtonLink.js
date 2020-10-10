import React from "react";
import MaterialIcon from "material-icons-react";

export default function ButtonLink({
  href = "#",
  text = "",
  icon = "",
  onClick,
  bgc = "$primary-gray",
  color = "black",
}) {
  const style = {
    backgroundColor: bgc,
    color: color,
  };
  // console.log(href);
  return (
    <a href={href} className="btn" onClick={onClick} style={style}>
      <MaterialIcon icon={icon} color="#212121" />
      <span>{text}</span>
    </a>
  );
}
