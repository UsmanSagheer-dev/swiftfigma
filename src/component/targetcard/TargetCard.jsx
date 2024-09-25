import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Gauge } from '@mui/x-charts/Gauge';
import Typography from "@mui/material/Typography";

// Card Styles with Background Gradient
const cardStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "15px",
  textAlign: "center",
  background: "linear-gradient(336.19deg, #D355FF 0%, #9A55FF 57.79%)",
  padding: "24px 16px",
  width: "160px",
  height: "240px",
  borderRadius: "10px",
  "@media (max-width: 600px)": {
    flexDirection: "row",
    width: "100%",
    height: "auto",
    justifyContent: "space-between",
    gap: "25px",
    margin: "5px",
  },
};

export default function OutlinedCard() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%", // Ensures full width on small screens
      }}
    >
      <Card variant="outlined" sx={cardStyles}>
        {/* Gauge Chart */}
        <div
          style={{
            width: 150,
            height: 150,
            marginBottom: "20px",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "transparent",
         
          }}
        >
  <Gauge
  value={68}
  startAngle={0}
  endAngle={-360}
  innerRadius="70%"
  strokeWidth="5"
  outerRadius="100%"
  disableAxisListener="true"
 sx={{

 }}
/>


          {/* Percentage Text Overlay */}
          <div
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "18px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            68%
          </div>
        </div>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography
            variant="h5"
            component="div"
            sx={{ marginTop: "20px", color: "white", fontSize: "24px" }}
          >
            2,040/3,000
          </Typography>
          <Typography
            variant="body2"
            component="div"
            sx={{ color: "#F8F9FA", fontSize: "12px" }}
          >
            2,040/3,000
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}
