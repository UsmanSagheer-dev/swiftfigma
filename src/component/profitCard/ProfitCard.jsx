import React from "react";
import { Box, Typography } from "@mui/material";
import { IMAGES } from "../../assets/images/index";
import { FONTS } from "../constant/Constant";
import { COLOR } from "../constant/Constant";
import PriceCard from "../pricecard/PriceCard";

export default function ProfitCards() {
  const cardData = [
    {
      iconimage: IMAGES.button,
      title: "Total Profit",
      para: "$ 3,393.00",
      price: "3.4%",
      arrowDirection: "up",
      graphimg: IMAGES.graph,
      background: COLOR.SECONDARY,
      color: COLOR.CUSTOM,
    },
    {
      iconimage: IMAGES.button2,
      title: "Total Expenses",
      para: "$ 1,467.00",
      price: "2.6%",
      arrowDirection: "down",
      graphimg: IMAGES.graph2,
      background: COLOR.SECONDRYCARDCOLOR,
      color: COLOR.SECONDRYRED,
    },
    {
      iconimage: IMAGES.button3,
      title: "New Customers",
      para: "1,000",
      price: "10%",
      arrowDirection: "up",
      graphimg: IMAGES.graph3,
      background: COLOR.SECONDRYBLUECOLOR,
      color: COLOR.SECONDRYBLUE,
    },
  ];

  return (
    <Box sx={{ display: "flex", gap: "17px", width: "780px" }}>
      {cardData.map((card, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "",
            borderRadius: "10px",
            width: "230px",
            height: "auto",
            padding: "24px 16px 20px 16px",
            border: "0.75px solid #00000020",
          }}
        >
          {/* Icon Image */}
          <img
            src={card.iconimage}
            alt="icon"
            style={{ marginBottom: "10px", width: "28.5px", height: "28.5px" }}
          />

          <Typography
            variant="h6"
            component="div"
            sx={{
              marginBottom: "20px",
              fontFamily: FONTS.BARLOW,
              color: "#6C757D",
              fontSize: "15px",
            }}
          >
            {card.title}
          </Typography>

          {/* Using PriceCard Component */}
          <PriceCard
            para={card.para}
            arrowDirection={card.arrowDirection}
            price={card.price}
            background={card.background}
            color={card.color}
          />

          {/* Graph Image at the Bottom */}
          <img
            src={card.graphimg}
            alt="graph-img"
            style={{ height: "77px", marginTop: "12px" }}
          />
        </Box>
      ))}
    </Box>
  );
}
