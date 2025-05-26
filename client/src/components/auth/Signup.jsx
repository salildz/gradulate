import { Box, Button, Card, CardContent, FormControl, Grid, Link, Typography } from "@mui/material";
import { t } from "i18next";
import CustomInput from "../form/CustomInput";
import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="stretch" sx={{ height: "100vh" }}>
      <Grid size={5}>
        <Box sx={{ height: "100%", p: 9 }}>
          <Card raised sx={{ borderRadius: 4, py: 8 }}>
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="h3" fontWeight={"bold"} gutterBottom>
                  {t("auth.signUp")}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", pt: 2, px: 14 }}>
                <CustomInput label={t("auth.email")} type="email" name="email" value={formData.email} onChange={handleChange} />
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: 2 }}>
                  <CustomInput label={t("auth.firstName")} type="text" name="firstName" value={formData.firstName} onChange={handleChange} fullWidth={false} />
                  <CustomInput label={t("auth.lastName")} type="text" name="lastName" value={formData.lastName} onChange={handleChange} fullWidth={false} />
                </Box>
                <CustomInput label={t("auth.password")} type="password" name="password" value={formData.password} onChange={handleChange} />
                <CustomInput label={t("auth.confirmPassword")} type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                <FormControl sx={{ display: "flex", justifyContent: "center", pt: 2, mx: 4 }}>
                  <Button variant="contained">{t("auth.signUp")}</Button>
                </FormControl>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
                <Typography variant="body2" color="textSecondary">
                  {t("auth.alreadyHaveAccount")}{" "}
                  <Link href="/login" color="primary" fontWeight={"bold"} underline="hover">
                    {t("auth.login")}
                  </Link>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Grid>
      <Grid size={7}>
        <Box sx={{ height: "100%", bgcolor: "blue" }}></Box>
      </Grid>
    </Grid>
  );
};

export default Signup;
