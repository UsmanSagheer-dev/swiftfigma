import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Gauge } from "@mui/x-charts/Gauge";
import Typography from "@mui/material/Typography";

const Styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    background: "linear-gradient(336.19deg, #D355FF 0%, #9A55FF 57.79%)",
    padding: "24px 16px",
    width: "160px",
    height: "240px",
    borderRadius: "10px",
    "@media (max-width: 1194px)": {
      width: "124px",
      height: "196px",
    },
    "@media (max-width: 670px)": {
      flexDirection: "row",
      marginLeft: "11px",
      width: "100%",
      height: "196px",
      gap: "50px",
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
    "@media (max-width: 1194px)": {
      width: 40,
      height: 10,
    },
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
            arcColor="white" 
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
