import React from "react";
import { TextField } from "@material-ui/core";

export default function InputFile({ desc }) {
  return (
    <div className="input">
      <p>{desc}</p>
      <TextField style={{ width: "70%" }} name="upload-photo" type="file" />
    </div>
  );
}
