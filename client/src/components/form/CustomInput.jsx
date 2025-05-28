import { Box, FormControl, FormControlLabel, FormHelperText, FormLabel, TextField } from "@mui/material";
import React from "react";

const CustomInput = ({ label = "Custom input", type = "text", name = "customInput", value, onChange, fullWidth = true, error, helperText = {} }) => {
  return (
    <FormControl variant="outlined" fullWidth={fullWidth}>
      <TextField name={name} variant="filled" fullWidth={fullWidth} margin="normal" label={label} type={type} value={value} onChange={onChange} error={error} helperText={helperText} autoComplete={name}></TextField>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default CustomInput;
