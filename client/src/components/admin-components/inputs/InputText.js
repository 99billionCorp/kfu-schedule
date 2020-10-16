import React from "react";
import { TextField, withStyles } from "@material-ui/core";

const InputText__input = withStyles({
  root: {
    width: "100%",
  },
})(TextField);

export default function InputText({
  desc = "",
  placeholder = "",
  value,
  onChange,
}) {
  return (
    <label className="input input-text">
      <p className="input__desc"> {desc}</p>
      <InputText__input
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
}
