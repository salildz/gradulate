import React from "react";
import { Box, Card, CardContent, Chip, Grid, List, ListItem, ListItemText, MenuItem, Select, Typography } from "@mui/material";
import userData from "../utility/exampleUserData.json";

const Scenario = () => {
  console.log(userData);
  return (
    <Grid container spacing={3} justifyContent="start" className="prevent-selection">
      {userData.academicYears.map((academicYear, index) =>
        academicYear.semesters.map((semester, semesterIndex) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={`${index}-${semesterIndex}`}>
            <Card
              elevation={4}
              sx={{
                borderRadius: 3,
                background: (theme) => `linear-gradient(145deg, ${theme.palette.background.paper}98, ${theme.palette.background.default}95)`,
                backdropFilter: "blur(12px)",
                border: (theme) => `1px solid ${theme.palette.divider}25`,
                boxShadow: (theme) => `0 4px 20px ${theme.palette.common.black}15`,
                transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  boxShadow: (theme) => `0 8px 32px ${theme.palette.common.black}20`,
                  border: (theme) => `1px solid ${theme.palette.primary.main}`,
                  background: (theme) => `linear-gradient(145deg, ${theme.palette.background.paper}99, ${theme.palette.background.default}96)`,
                },
              }}
            >
              <CardContent sx={{ p: 2.5 }}>
                <Typography
                  variant="h6"
                  color="primary"
                  fontWeight={600}
                  gutterBottom
                  sx={{
                    textAlign: "center",
                    p: 1.5,
                    mb: 2,
                    borderRadius: 2,
                    background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.main}12, ${theme.palette.secondary.main}08)`,
                    border: (theme) => `1px solid ${theme.palette.primary.main}20`,
                    fontSize: { xs: "1rem", sm: "1.1rem" },
                    letterSpacing: 0.3,
                  }}
                >
                  {academicYear.year}. Sınıf - {semesterIndex + 1}. Dönem
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: 1.5,
                    mb: 2.5,
                    p: 1.5,
                    borderRadius: 2,
                    background: (theme) => `linear-gradient(135deg, ${theme.palette.background.default}50, ${theme.palette.background.paper}30)`,
                    border: (theme) => `1px solid ${theme.palette.divider}15`,
                  }}
                >
                  <Chip
                    label={`${semester.courses.reduce((total, course) => total + course.credits, 0)} Kredi`}
                    variant="outlined"
                    color="secondary"
                    size="small"
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.8rem",
                      background: (theme) => `${theme.palette.secondary.main}08`,
                      border: (theme) => `1px solid ${theme.palette.secondary.main}30`,
                      "&:hover": {
                        background: (theme) => `${theme.palette.secondary.main}12`,
                      },
                    }}
                  />
                  <Chip
                    label={`${semester.courses.length > 0 ? (semester.courses.reduce((total, course) => total + course.gradePoint * course.credits, 0) / semester.courses.reduce((total, course) => total + course.credits, 0)).toFixed(2) : "N/A"} GPA`}
                    variant="outlined"
                    color="primary"
                    size="small"
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.8rem",
                      background: (theme) => `${theme.palette.primary.main}08`,
                      border: (theme) => `1px solid ${theme.palette.primary.main}30`,
                      "&:hover": {
                        background: (theme) => `${theme.palette.primary.main}12`,
                      },
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    borderRadius: 2.5,
                    background: (theme) => `linear-gradient(135deg, ${theme.palette.background.paper}60, ${theme.palette.background.default}40)`,
                    border: (theme) => `1px solid ${theme.palette.divider}20`,
                    overflow: "hidden",
                  }}
                >
                  <List sx={{ p: 0 }}>
                    {semester.courses.map((course, courseIndex) => (
                      <ListItem
                        key={courseIndex}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          background: (theme) => (courseIndex % 2 === 0 ? `${theme.palette.background.paper}30` : `${theme.palette.background.default}25`),
                          borderBottom: (theme) => (courseIndex < semester.courses.length - 1 ? `1px solid ${theme.palette.divider}15` : "none"),
                          py: 1.5,
                          px: 2,
                          transition: "background-color 0.2s ease",
                          "&:hover": {
                            background: (theme) => `linear-gradient(90deg, ${theme.palette.primary.main}06, ${theme.palette.secondary.main}04)`,
                          },
                        }}
                      >
                        <ListItemText
                          primary={
                            <Typography
                              variant="body2"
                              fontWeight={500}
                              sx={{
                                color: (theme) => theme.palette.text.primary,
                                fontSize: { xs: "0.85rem", sm: "0.9rem" },
                                lineHeight: 1.3,
                              }}
                            >
                              {course.name}
                            </Typography>
                          }
                          secondary={
                            <Typography
                              variant="caption"
                              sx={{
                                color: (theme) => theme.palette.text.secondary,
                                fontWeight: 500,
                                fontSize: "0.75rem",
                              }}
                            >
                              {course.credits} kredi
                            </Typography>
                          }
                        />
                        <Select
                          value={course.grade}
                          onChange={(e) => {
                            console.log(`Grade changed for ${course.name}: ${e.target.value}`);
                          }}
                          size="small"
                          sx={{
                            minWidth: 85,
                            "& .MuiSelect-select": {
                              py: 0.6,
                              px: 1.2,
                              fontSize: "0.8rem",
                              fontWeight: 600,
                              background: (theme) => `${theme.palette.background.paper}90`,
                              border: (theme) => `1px solid ${theme.palette.divider}25`,
                              borderRadius: 1.5,
                              color: (theme) => theme.palette.primary.main,
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                              border: "none",
                            },
                            "&:hover .MuiSelect-select": {
                              background: (theme) => `${theme.palette.background.paper}95`,
                              border: (theme) => `1px solid ${theme.palette.primary.main}30`,
                            },
                            "&.Mui-focused .MuiSelect-select": {
                              background: (theme) => `${theme.palette.background.paper}98`,
                              border: (theme) => `1px solid ${theme.palette.primary.main}50`,
                            },
                          }}
                        >
                          {Object.entries(userData.gradeScale).map(([key, value]) => (
                            <MenuItem
                              key={key}
                              value={key}
                              sx={{
                                fontSize: "0.8rem",
                                fontWeight: 500,
                                py: 0.8,
                                px: 1.5,
                                background: (theme) => `${theme.palette.background.paper}98`,
                                "&:hover": {
                                  background: (theme) => `linear-gradient(90deg, ${theme.palette.primary.main}12, ${theme.palette.secondary.main}08)`,
                                },
                                "&.Mui-selected": {
                                  background: (theme) => `linear-gradient(90deg, ${theme.palette.primary.main}15, ${theme.palette.secondary.main}10)`,
                                  "&:hover": {
                                    background: (theme) => `linear-gradient(90deg, ${theme.palette.primary.main}18, ${theme.palette.secondary.main}12)`,
                                  },
                                },
                              }}
                            >
                              <Typography variant="body2" fontWeight={600}>
                                {key} ({value.point.toFixed(1)})
                              </Typography>
                            </MenuItem>
                          ))}
                        </Select>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default Scenario;
