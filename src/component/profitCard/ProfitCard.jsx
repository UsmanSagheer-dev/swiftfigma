import React from "react";
import { Box, Typography } from "@mui/material";
import { IMAGES } from "../../assets/images/index";
import { FONTS } from "../constant/Constant";
import { COLOR } from "../constant/Constant";
import PriceWithArrow from "../pricewitharrow/Pricewitharrow";

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
      title: "Revenue",
      para: "$8,000",
      price: "$10,000",
      arrowDirection: "down",
      graphimg: IMAGES.graph2,
      background: COLOR.SECONDRYCARDCOLOR,
      color: COLOR.SECONDRYRED,
    },
    {
      iconimage: IMAGES.button3,
      title: "Expenses",
      para: "$5,000",
      price: "$6,500",
      arrowDirection: "up",
      graphimg: IMAGES.graph3,
      background: COLOR.SECONDRYBLUECOLOR,
      color: COLOR.SECONDRYBLUE,
    },
  ];

  return (
    <Box sx={{ display: "flex", gap: "21px", width: "800px" }}>
      {cardData.map((card, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "",
            borderRadius: "10px",
            width: "233px",
            height: "230px",
            padding: "24px 16px 20px 16px",
            border: "0.75px solid #00000020",
          }}
        >
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

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              backgroundColor: "#fff",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          >
            <Typography variant="body1" sx={{ fontSize: "24px" }}>
              {card.para}
            </Typography>

            <PriceWithArrow
              arrowDirection={card.arrowDirection}
              price={card.price}
              background={card.background}
              color={card.color}
            />
          </Box>

          <img
            src={card.graphimg}
            alt="graph-img"
            style={{ borderRadius: "8px" }}
          />
        </Box>
      ))}
    </Box>
  );
}
