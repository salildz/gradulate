import { Box, Button, Card, CardContent, FormControl, Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import CustomNumberInput from "../form/CustomNumberInput";

const UserSettings = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    semesterPerYear: 0,
    programDuration: 0,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("handleChange", name, value);
    console.log("formData", formData);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Grid container spacing={2} justifyContent="start" className="prevent-selection">
      <Grid size={{ xs: 12, xl: 6 }}>
        <Card elevation={3} sx={{ borderRadius: 4 }}>
          <CardContent>
            <Typography variant="h4" fontWeight={"bold"} color="primary" gutterBottom sx={{ textAlign: "center" }}>
              {t("settings.userSettings")}
            </Typography>
            <Stack spacing={4} sx={{ mt: 4, px: { xs: 2, md: 6 } }}>
              <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Grid size={{ xs: 12, md: 6 }} sx={{ px: 4 }}>
                  <CustomNumberInput label={t("settings.semestersPerYear")} name="semesterPerYear" value={formData.semesterPerYear} onChange={handleChange} fullWidth={true} helperText={t("settings.semestersPerYearDescription")} min={0} max={10} step={1} required={true} />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} sx={{ px: 4 }}>
                  <CustomNumberInput label={t("settings.programDuration")} name="programDuration" value={formData.programDuration} onChange={handleChange} fullWidth={true} helperText={t("settings.programDurationDescription")} min={0} max={10} step={1} required={true} />
                </Grid>
              </Grid>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Button
                  variant="contained"
                  size="medium"
                  sx={{
                    minWidth: 200,
                    py: 1.5,
                    fontWeight: "bold",
                  }}
                >
                  {t("general.save")}
                </Button>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default UserSettings;
