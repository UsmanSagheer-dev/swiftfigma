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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "0",
          margin: "0",
        }}
      >
        {/* Adjust Typography to remove any unwanted padding/margins */}
        <Typography
          sx={{
            fontFamily: FONTS.BARLOW,
            fontSize: "14px",
            fontWeight: "600",

            display: "flex",
            justifyContent: "flex-start",
            padding: "1px 0", // Set padding as needed
            margin: 0, // Remove default margin if any
          }}
        >
          {heading}
        </Typography>

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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ marginRight: "10px" }}>
            <img src={IMAGES.button4} alt="" />
          </Box>

          {/* Text Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",

              margin: "24px 0",
              padding: "0",
            }}
          >
          
            <Typography
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                h4: { margin: 0, padding: 0 ,fontFamily:FONTS.BARLOW,fontSize:"15px"}, 
                p: { margin: 0, padding: 0 ,}, 
              }}
            >
              <h4 style={{ height: "10px" }}>Accounting</h4>
              <p style={{color:COLOR.PRIMARY}}>July 1, 2023 - July 31, 2023</p>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default IncomeFirstCard;

const Styles = {
  price: {
    marginTop: "17px",
  },
  compare: {
    marginTop: "17px",
    height: "25px",
    padding: "0",
    display: "flex",
    margin: "17px 0",
    alignItems: "center",
    fontSize: "14px",
    color: COLOR.PRIMARY,
  },
};
