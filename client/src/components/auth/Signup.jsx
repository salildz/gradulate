import { Box, Button, Card, CardContent, CardMedia, FormControl, Grid, Link, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import CustomInput from "../form/CustomInput";
import { useState } from "react";
import { blue } from "@mui/material/colors";
import OrbitDesign from "./OrbitDesign";

const Signup = () => {
  const { t } = useTranslation();

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
    <Grid container sx={{ height: "100vh" }}>
      <Grid size={{ xs: 12, lg: 7, xl: 5 }} sx={{ height: "100vh" }}>
        <Box sx={{ height: "100%", width: "100%", p: { xs: 3, lg: 7, xl: 8 }, px: { xs: 2, lg: 10, xl: 12 }, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Card raised sx={{ borderRadius: 4, py: { xs: 2, lg: 8 }, background: (theme) => `linear-gradient(45deg, ${blue[900]} 3%, ${theme.palette.background.default} 25%, ${blue[900]} 120%)` }}>
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="h3" fontWeight={"bold"} color="primary" gutterBottom>
                  {t("auth.signUp")}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", pt: 2, px: { xs: 4, lg: 14 } }}>
                <CustomInput label={t("auth.email")} type="email" name="email" value={formData.email} onChange={handleChange} />
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: 2 }}>
                  <CustomInput label={t("auth.firstName")} type="text" name="firstName" value={formData.firstName} onChange={handleChange} fullWidth={false} />
                  <CustomInput label={t("auth.lastName")} type="text" name="lastName" value={formData.lastName} onChange={handleChange} fullWidth={false} />
                </Box>
                <CustomInput label={t("auth.password")} type="password" name="password" value={formData.password} onChange={handleChange} />
                <CustomInput label={t("auth.confirmPassword")} type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
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
                    {t("auth.signUp")}
                  </Button>
                </FormControl>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center", pt: 3 }}>
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

export default Signup;
