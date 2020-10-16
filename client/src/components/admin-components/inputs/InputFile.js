import React, { useRef } from "react";
import { TextField } from "@material-ui/core";

export default function InputFile({ desc }) {
  const fileInput = useRef(null);

  const handleFileInput = (e) => {
    // const file = e.target.files[0];
    // if (file.size > 3096)
    //   onFileSelectError({ error: "File size cannot exceed more than 1MB" });
    // else onFileSelectSuccess(file);

    return e.target.files[0];
  };

  return (
    <div className="input">
      <p>{desc}</p>
      <TextField
        type="file"
        onChange={handleFileInput}
        style={{ width: "70%" }}
      />
    </div>
  );
}
