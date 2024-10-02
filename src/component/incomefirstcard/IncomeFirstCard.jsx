import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import PriceCard from "../pricecard/PriceCard"; // Ensure the path is correct
import { COLOR, FONTS } from "../constant/Constant"; // Import colors and fonts
import { IMAGES } from "../../assets/images";

const IncomeFirstCard = () => {
  const heading = "Monthly Income"; // Example heading

  // Data for the PriceCard
  const cardData = {
    para: "$ 3,393.00",
    price: "3.4%",
    arrowDirection: "up",
    background: COLOR.SECONDARY,
    color: COLOR.CUSTOM,
  };

  return (
    <>
      <Box sx={Styles.container}>
        <Typography sx={Styles.heading}>{heading}</Typography>

        <Box sx={Styles.price}>
          <PriceCard
            para={cardData.para}
            arrowDirection={cardData.arrowDirection}
            price={cardData.price}
            background={cardData.background}
            color={cardData.color}
          />
        </Box>
        <Typography sx={Styles.compare}>
          <p>Compared to the previous month</p>
        </Typography>
        <Divider />
        <Box sx={Styles.imageContainer}>
          <Box sx={Styles.imageBox}>
            <img src={IMAGES.button4} alt="" />
          </Box>

          <Box sx={Styles.textSection}>
            <Typography component="div" sx={Styles.textContent}>
              <h4 style={{ height: "10px" }}>Accounting</h4>
              <Typography
                component="p"
                sx={{
                  color: COLOR.PRIMARY,

                  fontSize: "14px", // Default font size
                  "@media (max-width: 1194px)": {
                    fontSize: "15px", // Font size for smaller screens
                  },
                }}
              >
                July 1, 2023 - July 31, 2023
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default IncomeFirstCard;

const Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    width: "auto",
    padding: "19px 13px",
    margin: "0",

    height: "auto",
    "@media (max-width: 1194px)": {
      height: "157px",
    },
  },
  heading: {
    fontFamily: FONTS.BARLOW,
    fontSize: "14px",
    fontWeight: "600",
    display: "flex",
    justifyContent: "flex-start",
    padding: "0 0 10px 0",
    "@media (max-width: 1194px)": {
      padding: "0",
    },
  },
  price: {},
  compare: {
    height: "25px",
    padding: "0",
    display: "flex",
    margin: "17px 0",
    alignItems: "center",
    fontSize: "14px",
    color: COLOR.PRIMARY,
    "@media (max-width: 1200px)": {
      marginTop: "px",
    },
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",

    marginTop: "17px",
  },
  imageBox: {
    display: "flex",
  },
  textSection: {
    display: "flex",
    flexDirection: "column",

    padding: "0",
    "@media (max-width: 1194px)": {
      marginTop: "0",
    },
  },
  textContent: {
    display: "flex",
    flexDirection: "column",

    gap: "20px",
    "@media (max-width: 1200px)": {
      gap: "5px",
    },
    "@media (max-width: 670px)": {
      gap: "15px",
    },
    h4: {
      margin: 0,
      padding: 0,
      fontFamily: FONTS.BARLOW,
      fontSize: "15px",
    },
    p: { margin: 0, padding: 0 },
  },
};
