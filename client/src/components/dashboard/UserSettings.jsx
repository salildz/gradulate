import { Box, Button, Card, CardContent, FormControl, Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import CustomNumberInput from "../form/CustomNumberInput";

const UserSettings = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    semesterPerYear: 0,
    coursesPerSemester: [],
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    //okulunun bir senede kaç dönemi olduğunu seçebilir, bir d önemde kaç ders olduğunu ve hangi derslerin olduğunu seçebilir, bir dersin kaç kredi olduğunu seçebilir vsvs hepsi için bir ayar sayfası bu
    <Grid container spacing={2} justifyContent="start">
      <Grid size={{ xs: 12, xl: 6 }}>
        <Card>
          <CardContent>
            <Typography variant="h3" fontWeight={"bold"} color="primary" gutterBottom>
              {t("settings.userSettings")}
            </Typography>
            <Stack spacing={4} sx={{ mt: 4, px: { xs: 2, md: 6 } }}>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Button
                  variant="contained"
                  size="large"
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
