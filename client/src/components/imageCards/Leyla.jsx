import { Card, CardMedia } from "@mui/material";

const Leyla = () => {
  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia
        component="img"
        image="/leyla.jpg"
        alt="Leyla"
        sx={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
      />
    </Card>
  );
};

export default Leyla;
