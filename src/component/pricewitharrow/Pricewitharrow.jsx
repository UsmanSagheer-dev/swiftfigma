import React from 'react';
import { Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { COLOR } from '../constant/Constant'; // Import your constants

const PriceWithArrow = ({ arrowDirection, price, background, color }) => {
  return (
    <Typography
      variant="body1"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "10px",
        backgroundColor: background,
        width: "49px",
        height: "17px",
        padding: "0.75px 6px",
        borderRadius: "15px",
        color: color,
      }}
    >
      {arrowDirection === "up" ? (
        <ArrowUpwardIcon sx={{ color: "#28a745", fontSize: "10px" }} />
      ) : (
        <ArrowDownwardIcon sx={{ color: COLOR.SECONDRYRED, fontSize: "10px" }} />
      )}
      {price}
    </Typography>
  );
};

export default PriceWithArrow;
