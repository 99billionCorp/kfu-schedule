import React from "react";
import TextField from "@material-ui/core/TextField";

export default function InputText({
  desc = "",
  placeholder = "",
  value,
  onChange,
}) {
  return (
    <div className="input input-text">
      <p>{desc}</p>
      <TextField
        style={{ width: "70%" }}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
