import { AppBar, MenuItem, Select, Toolbar, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const LANG_MAP = {
  en: "en-US",
  "en-US": "en-US",
  tr: "tr",
  "tr-TR": "tr",
};

const Navbar = () => {
  const { i18n } = useTranslation();

  console.log("Current language:", i18n.language);
  console.log("Available languages:", i18n.languages);
  const normalizedLang = LANG_MAP[i18n.language] || "en-US";

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Gradulate
        </Typography>

        <Select value={normalizedLang} onChange={(e) => i18n.changeLanguage(e.target.value)} variant="standard" sx={{ color: "white" }}>
          <MenuItem value="en-US">English</MenuItem>
          <MenuItem value="tr">Türkçe</MenuItem>
        </Select>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
