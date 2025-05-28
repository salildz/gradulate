import { MenuItem, Select } from "@mui/material";

const CustomSelect = ({ label = "Custom select", type = "text", name = "customInput", value = "", onChange, fullWidth = true, error, helperText, options = [] }) => {
  const safeValue = value !== undefined && value !== null ? value : "";

  return (
    <Select label={label} value={safeValue} onChange={onChange} fullWidth={fullWidth} name={name} error={error} helperText={helperText} variant="outlined">
      {options?.map((option, index) => (
        <MenuItem key={index} value={option.value || ""}>
          {option.label || ""}
        </MenuItem>
      ))}
    </Select>
  );
};

export default CustomSelect;
