import { Box, Button, Card, CardContent, FormControl, Grid, Link, Typography } from "@mui/material";
import React from "react";
import CustomInput from "../form/CustomInput";
import { useTranslation } from "react-i18next";
import { blue } from "@mui/material/colors";
import OrbitDesign from "./OrbitDesign";

const Login = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid size={{ xs: 12, lg: 7, xl: 5 }} sx={{ height: "100vh" }}>
        <Box sx={{ height: "100%", width: "100%", p: { xs: 3, lg: 7, xl: 8 }, px: { xs: 2, lg: 10, xl: 12 }, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Card raised sx={{ borderRadius: 4, py: { xs: 2, lg: 8 }, background: (theme) => `linear-gradient(225deg, ${blue[900]} 3%, ${theme.palette.background.default} 25%, ${blue[900]} 120%)` }}>
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="h3" fontWeight={"bold"} color="primary" gutterBottom>
                  {t("auth.login")}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", pt: 2, px: { xs: 4, lg: 14 } }}>
                <CustomInput label={t("auth.email")} type="email" name="email" value={formData.email} onChange={handleChange} />
                <CustomInput label={t("auth.password")} type="password" name="password" value={formData.password} onChange={handleChange} />
                <FormControl sx={{ display: "flex", justifyContent: "center", pt: 2, mx: 4 }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      py: { xs: 1.2, md: 1.5 },
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      fontWeight: "bold",
                      borderRadius: 3,
                    }}
                  >
                    {t("auth.login")}
                  </Button>
                </FormControl>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center", pt: 3 }}>
                <Typography variant="body2" color="textSecondary">
                  {t("auth.dontHaveAccount")}{" "}
                  <Link href="/signup" color="primary" fontWeight={"bold"} underline="hover">
                    {t("auth.signUp")}
                  </Link>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Grid>
      <Grid
        size={{ xs: 0, lg: 5, xl: 7 }}
        sx={{
          display: { xs: "none", md: "flex" },
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <OrbitDesign />
      </Grid>
    </Grid>
  );
};

export default Login;
