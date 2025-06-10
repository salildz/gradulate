import { Box, FormControl, FormHelperText, IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CustomNumberInput = ({ label = "Sayı Girişi", name = "customNumberInput", value, onChange, fullWidth = false, error, helperText, min, max, step = 1, disabled, required }) => {
  const inputValue = value === undefined || value === null ? "" : value;
  const numValue = parseFloat(value) || 0;
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleIncrement = () => {
    const newValue = numValue + step;
    if (max === undefined || newValue <= max) {
      onChange({ target: { name, value: newValue } });
    }
  };

  const handleDecrement = () => {
    const newValue = numValue - step;
    if (min === undefined || newValue >= min) {
      onChange({ target: { name, value: newValue } });
    }
  };

  const canIncrement = disabled || (max !== undefined && numValue >= max);
  const canDecrement = disabled || (min !== undefined && numValue <= min);

  return (
    <FormControl variant="outlined" fullWidth={fullWidth} sx={!fullWidth ? { width: "auto", minWidth: "180px", maxWidth: "250px" } : {}}>
      {label && (
        <Typography
          variant="caption"
          component="label"
          sx={{
            mb: 0.5,
            color: error ? "error.main" : "primary.main",
            fontWeight: 600,
            letterSpacing: 0.5,
            textTransform: "uppercase",
          }}
        >
          {label}
        </Typography>
      )}

      <Box
        sx={{
          display: "flex",
          alignItems: "stretch",
          position: "relative",
          borderRadius: 2,
          overflow: "hidden",
          background: (theme) => `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.action.hover} 100%)`,
          border: (theme) => `1px solid ${error ? theme.palette.error.main : isFocused ? theme.palette.primary.main : isHovered ? theme.palette.primary.light : theme.palette.divider}`,
          boxShadow: (theme) => (isFocused ? `0 0 12px ${theme.palette.primary.main}25` : isHovered ? `0 2px 8px rgba(0,0,0,0.08)` : `0 1px 4px rgba(0,0,0,0.04)`),
          transition: "all 0.2s ease",
          height: "48px",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Box sx={{ flex: 1, position: "relative" }}>
          <TextField
            type="number"
            name={name}
            value={inputValue}
            onChange={onChange}
            disabled={disabled}
            required={required}
            variant="standard"
            size="small"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            sx={{
              width: "100%",
              height: "100%",
              "& .MuiInput-underline:before": { display: "none" },
              "& .MuiInput-underline:after": { display: "none" },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": { display: "none" },
              "& input": {
                textAlign: "center",
                fontSize: "1rem",
                fontWeight: 600,
                color: (theme) => theme.palette.primary.main,
                background: "transparent",
                border: "none",
                outline: "none",
                padding: "12px 16px",
                height: "100%",
                boxSizing: "border-box",
                "&::placeholder": {
                  color: (theme) => theme.palette.text.disabled,
                  opacity: 0.7,
                },
                "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
                  WebkitAppearance: "none",
                  margin: 0,
                },
                "&[type=number]": {
                  MozAppearance: "textfield",
                },
              },
            }}
            slotProps={{
              input: {
                min,
                max,
                step,
              },
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "40px",
            background: (theme) => `linear-gradient(180deg, ${theme.palette.primary.main}10, ${theme.palette.primary.main}05)`,
            borderLeft: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          <IconButton
            onClick={handleIncrement}
            disabled={canIncrement}
            size="small"
            sx={{
              width: "100%",
              height: "50%",
              borderRadius: 0,
              minHeight: "23px",
              padding: "4px",
              color: canIncrement ? "action.disabled" : "primary.main",
              background: "transparent",
              borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
              transition: "all 0.15s ease",
              "&:hover:not(:disabled)": {
                background: (theme) => `${theme.palette.primary.main}15`,
                color: (theme) => theme.palette.primary.main,
              },
              "&:active:not(:disabled)": {
                background: (theme) => `${theme.palette.primary.main}25`,
              },
              "&:disabled": {
                background: "transparent",
                color: (theme) => theme.palette.action.disabled,
              },
            }}
          >
            <AddIcon fontSize="small" />
          </IconButton>

          <IconButton
            onClick={handleDecrement}
            disabled={canDecrement}
            size="small"
            sx={{
              width: "100%",
              height: "50%",
              borderRadius: 0,
              minHeight: "23px",
              padding: "4px",
              color: canDecrement ? "action.disabled" : "primary.main",
              background: "transparent",
              transition: "all 0.15s ease",
              "&:hover:not(:disabled)": {
                background: (theme) => `${theme.palette.primary.main}15`,
                color: (theme) => theme.palette.primary.main,
              },
              "&:active:not(:disabled)": {
                background: (theme) => `${theme.palette.primary.main}25`,
              },
              "&:disabled": {
                background: "transparent",
                color: (theme) => theme.palette.action.disabled,
              },
            }}
          >
            <RemoveIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {helperText && (
        <FormHelperText
          error={error}
          sx={{
            ml: 0.5,
            mt: 0.5,
            fontSize: "0.6rem",
            color: error ? "error.main" : "text.secondary",
          }}
        >
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default CustomNumberInput;
