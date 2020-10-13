import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const renderMenuItems = (arr) => {
  return arr.map((el, i) => <MenuItem value={i}> {el} </MenuItem>);
};

// const subdivision = ["Таврическая академия им. В.И. Вернадского", "КИПУ"];

export default function MenuDropdown({ itemList = [] }) {
  // console.log(itemList);
  const classes = useStyles();
  return (
    <div>
      <FormControl style={{ width: "250px" }} className={classes.formControl}>
        {/* <InputLabel id="demo-simple-select-filled-label">Отдел</InputLabel> */}

        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ "aria-label": "Without label" }}
        >
          {renderMenuItems(itemList)}
        </Select>
        {/* <FormHelperText>Отделение КФУ</FormHelperText> */}
      </FormControl>
    </div>
  );
}
