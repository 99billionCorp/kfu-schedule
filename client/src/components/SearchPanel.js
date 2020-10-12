import React from "react";
import MaterialIcon from "material-icons-react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const professor = [
  {
    name: "Муратов Мустафа Абдурешитович",
  },
  {
    name: "Козлов Александр Иванович",
  },
  {
    name: "Белозуб Владимир Антонович",
  },
  {
    name: "Старков Павел Александрович",
  },
];

const inputStyle = {
  width: "100%",
  // position: "absolute",
  // top: "0",
  // left: "0",
  // right: "0",
  height: "2.5rem",
  fontSize: "1.2rem",
  border: "none",
  outline: "none",
  padding: "5px",
  backgroundColor: "$primary-gray",
  borderBottom: "1px solid #ddd",
};

export default function SearchPanel() {
  return (
    <Autocomplete
      options={professor}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <div className="searchPanel" ref={params.InputProps.ref}>
          <input
            // className="search-input"
            style={inputStyle}
            type="text"
            autoFocus="true"
            placeholder="Начните вводить текст..."
            {...params.inputProps}
          />
        </div>
      )}
    />
  );
}
// <TextField {...params} label="Факультет..." />}

// <div className="searchPanel">
//   <MaterialIcon icon="search" />
//   <input
//     className="search-input"
//     type="text"
//     autoFocus="true"
//     placeholder="Начните вводить текст..."
//   />
// </div>
