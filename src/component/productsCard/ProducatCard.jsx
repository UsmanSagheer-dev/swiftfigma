import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import BowlCard from "../bowlcard/BowlCard";
import { IMAGES } from "../../assets/images";

// Styles object to centralize all the styles
const styles = {
  container: {
    margin: "0",
    padding: "0 10px",
  },
  headingText: {
    margin: 0,
  },
  cardWrapper: {
    width:'100%',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "12px",

  
  },
  cardItem: {
    marginBottom: 2,
  },
};

export default function ProductCard({ heading }) {
  // Information array for the bowl cards
  const information = [
    {
      image: IMAGES.bowl,
      bowlinfo: "Ceramic Bowl",
      para: "HomeGoods",
      price: "$12.00",
    },
    {
      image: IMAGES.cup,
      bowlinfo: "Ceramic Mug",
      para: "Potterific",
      price: "$59",
    },
    {
      image: IMAGES.vase,
      bowlinfo: "Vase",
      para: "Flower Child",
      price: "$99",
    },
    {
      image: IMAGES.woodenbowl,
      bowlinfo: "Wooden Bowl",
      para: "Wood Co.",
      price: "$30.",
    },
  ];

  return (
    <>
      <Box sx={styles.container}>
        <Typography>
          <p sx={styles.headingText}>{heading}</p>
        </Typography>

        <Divider />

        <Box sx={styles.cardWrapper}>
          {/* Mapping over the information array to render multiple BowlCard components */}
          {information.map((item, index) => (
            <Box key={index} sx={styles.cardItem}>
              {/* Passing all the props to BowlCard */}
              <BowlCard {...item} />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
