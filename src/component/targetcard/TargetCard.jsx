import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Gauge } from "@mui/x-charts/Gauge";
import Typography from "@mui/material/Typography";

// Styles object with all the styles centralized
const Styles = {
  card: {
    display: "flex",
    flexDirection: "column", // Default column direction
    alignItems: "center",
    textAlign: "center",
    background: "linear-gradient(336.19deg, #D355FF 0%, #9A55FF 57.79%)",
    padding: "24px 16px",
    width: "160px", // Fixed width for large screens
    height: "240px",
    borderRadius: "10px",
    "@media (max-width: 900px)": {
      width: "100%", // Full width for small screens
      flexDirection: "row", // Change to row direction
      height: "auto", // Adjust height for wrapping content
     
    },
  },
  gaugeContainer: {
    width: 150,
    height: 150,
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "transparent",
  },
  gaugeTextOverlay: {
  
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "18px",
    fontWeight: "bold",
    color: "white",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  mainText: {
    marginTop: "20px",
    color: "white",
    fontSize: { xs: "13px", md: "24px" },
  },
  subText: {
    color: "#F8F9FA",
    fontSize: "12px",
  },
};

export default function OutlinedCard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Card variant="outlined" sx={Styles.card}>
        {/* Gauge */}
        <div style={Styles.gaugeContainer}>
          <Gauge
            value={68}
            startAngle={0}
            endAngle={-360}
            innerRadius="70%"
            strokeWidth="5"
            outerRadius="100%"
            disableAxisListener="true"
          />
        </div>

        {/* Text */}
        <Box sx={Styles.textContainer}>
          <Typography variant="h5" component="div" sx={Styles.mainText}>
            2,040/3,000
          </Typography>
          <Typography variant="body2" component="div" sx={Styles.subText}>
            Target Orders
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}
