import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import GoogleMap from "../googlemap/googleMap";

function OrderCard() {
  return (
    <>
      <Box sx={style.container}>
        <Typography sx={style.heading}>City Order Statistics</Typography>

        <Box sx={style.dividerContainer}>
          <Divider sx={style.divider} />
        </Box>

        <Box sx={style.map}>
          <GoogleMap />
        </Box>
      </Box>
    </>
  );
}

export default OrderCard;

const style = {
  container: {
    width: "auto",
    padding: "24px 10px",
    borderRadius: "10px",
    backgroundColor: "#FFFFFF",
    border: "0.75px solid #00000020",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    "@media (max-width: 786px)": {
    width:"100%",
    },
  },
  heading: {
    fontSize: "14px",
    fontWeight: "600",
  },
  dividerContainer: {
    my: "5px",
    width: "100%",
    backgroundColor: "white",
  },
  divider: {
    marginTop: "16px",
    marginBottom: "16px",
  },
  map: {
    marginTop: "10px",
  },
};
