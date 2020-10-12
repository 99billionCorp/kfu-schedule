import React from "react";
import MaterialIcon from "material-icons-react";
import { Link } from "react-router-dom";

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
    <Link to={href}>
      <div className="btn" onClick={onClick} style={style}>
        <MaterialIcon icon={icon} color="#212121" />
        <span>{text}</span>
      </div>
    </Link>
  );
}
