import React from "react";
import { Box, Typography } from "@mui/material";
import PriceWithArrow from "../pricewitharrow/Pricewitharrow"; // Import the PriceWithArrow component

const PriceCard = ({ para, arrowDirection, price, background, color }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "",
        alignItems: "center",
        width: "100%",
   gap:'30px'
      }}
    >
      <Typography variant="body1" sx={{ fontSize: "24px",fontWeight:'700',width:'140px' }}>
        {para}
      </Typography>

      <PriceWithArrow
        arrowDirection={arrowDirection}
        price={price}
        background={background}
        color={color}
      />
    </Box>
  );
};

export default PriceCard;
