import { FormControl, FormHelperText, TextField } from "@mui/material";
import React from "react";

const CustomInput = ({ label = "Custom input", type = "text", name = "customInput", value, onChange, fullWidth = true, error, helperText }) => {
  return (
    <FormControl
      variant="outlined"
      fullWidth={fullWidth}
      sx={{
        flex: fullWidth ? "1 1 auto" : { xs: "1 1 100%", sm: "1 1 100%", md: "1 1 auto" },
      }}
    >
      <TextField
        name={name}
        variant="filled"
        margin="normal"
        label={label}
        type={type}
        value={value}
        onChange={onChange}
        error={error}
        helperText={helperText}
        autoComplete={name}
        sx={{
          "& .MuiFilledInput-root": {
            "&:before": {
              borderBottomColor: "divider",
            },
            "&:hover:not(.Mui-disabled):before": {
              borderBottomColor: "primary.main",
            },
          },
        }}
      />
      {helperText && <FormHelperText sx={{ mx: 1 }}>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default CustomInput;
