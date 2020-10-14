import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
  },
}));

export default function MenuDropdown({ arr = [] }) {
  const [listItem, setListItem] = useState(0);

  const handelChange = (e) => {
    console.log(e.target.value);
    setListItem(e.target.value);
  };

  const renderMenuItems = (arr) => {
    return arr.map((el, i) => (
      <MenuItem value={i} key={i}>
        {" " + el + ""}
      </MenuItem>
    ));
  };

  const classes = useStyles();
  return (
    <div>
      <FormControl className={classes.root}>
        <Select onClick={handelChange} value={listItem}>
          {renderMenuItems(arr)}
        </Select>
      </FormControl>
    </div>
  );
}
