import { Box, FormControl, FormControlLabel, FormHelperText, FormLabel, InputAdornment, TextField } from "@mui/material";
import React from "react";

const CustomNumberInput = ({ label = "Sayı Girişi", name = "customNumberInput", value, onChange, fullWidth = false, error, helperText, min, max, step, disabled, required, ...props }) => {
  const inputValue = value === undefined || value === null ? "" : value;

  return (
    <FormControl variant="outlined">
      <TextField
        label={label}
        type="number"
        name={name}
        value={inputValue}
        onChange={onChange}
        fullWidth={fullWidth}
        error={error}
        helperText={helperText}
        variant="filled"
        size="small"
        autoComplete="off"
        disabled={disabled}
        required={required}
        slotProps={{
          input: {
            min: min,
            max: max,
            step: step,
          },
          inputLabel: {},
        }}
        sx={
          !fullWidth
            ? {
                width: "auto",
                minWidth: "150px",
                maxWidth: "250px",
              }
            : {}
        }
        {...props}
      ></TextField>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default CustomNumberInput;
