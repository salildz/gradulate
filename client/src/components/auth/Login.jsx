import { Box, Button, Card, CardContent, FormControl, Grid, Link, Typography } from "@mui/material";
import React from "react";
import CustomInput from "../form/CustomInput";
import Leyla from "../imageCards/Leyla";
import { useTranslation } from "react-i18next";

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
    <Grid container spacing={2} justifyContent="center" sx={{ height: "100%" }}>
      <Grid size={{ xs: 12, lg: 5 }}>
        <Box sx={{ height: "100%", p: { xs: 3, lg: 9 }, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Card raised sx={{ borderRadius: 4, py: { xs: 2, lg: 8 } }}>
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="h3" fontWeight={"bold"} gutterBottom>
                  {t("auth.login")}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", pt: 2, px: { xs: 4, lg: 14 } }}>
                <CustomInput label={t("auth.email")} type="email" name="email" value={formData.email} onChange={handleChange} />
                <CustomInput label={t("auth.password")} type="password" name="password" value={formData.password} onChange={handleChange} />
                <FormControl sx={{ display: "flex", justifyContent: "center", pt: 2, mx: 4 }}>
                  <Button variant="contained">{t("auth.login")}</Button>
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
      <Grid size={{ xs: 0, lg: 7 }}>
        <Box sx={{ height: "100vh", overflow: "hidden" }}>
          <Leyla />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
