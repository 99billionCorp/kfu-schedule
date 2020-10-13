import React from "react";
import TextField from "@material-ui/core/TextField";

export default function InputText({ desc = "", placeholder = "" }) {
  return (
    <div className="inputText">
      <p>{desc}</p>
      <TextField style={{ width: "70%" }} placeholder={placeholder} />
    </div>
  );
}
