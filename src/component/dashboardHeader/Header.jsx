import { Box, Typography } from "@mui/material";
import { IMAGES } from "../../assets/images/index";
import SearchInput from "../searchinput/searchinput";
import { FONTS, COLOR } from "../constant/Constant";

function Header() {
  return (
    <Box sx={Style.header}>
      <Box sx={Style.infoContainer}>
        <Box sx={Style.first}>
          <Box sx={Style.infor}>
            <img src={IMAGES.porfileimg} alt="Profile" />
          </Box>

          <Box sx={Style.textContainer}>
            <Typography variant="h6" sx={Style.heading}>
              Welcome Back,{" "}
              <Typography variant="span" sx={Style.name}>
                Sophia Chester
              </Typography>
            </Typography>

            <Typography variant="body1" sx={Style.subheading}>
              Here are your monthly store updates.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <SearchInput />
        </Box>
      </Box>
    </Box>
  );
}

export default Header;

const Style = {
  header: {
    width: { xs: "100%", md: "100%", lg: "100%" },
    height: "auto",
    backgroundColor: "transparent",
    flexWrap: "wrap",
    marginRight: "50px",
  },
  infoContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
  },
  first: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: { xs: "10px", md: "22px" },
  },
  infor: {
    cursor: "pointer",
    "& img": {
      width: { xs: "61px", lg: "81px" },
      height: { xs: "61px", lg: "81px" },
      borderRadius: "50%",
    },
  },

  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  heading: {
    fontFamily: FONTS.ALBERT,
    fontSize: { xs: "16px", md: "24px", lg: "21px" },
    fontWeight: "700",
    "@media (min-width: 1200px)": {
      fontSize: "18px",
      flexWrap: "nowrap",
    },
  },
  name: {
    color: COLOR.TEXT,
    fontWeight: "bold",
    "@media (min-width: 1200px)": {
      fontSize: "18px",
      flexWrap: "nowrap",
    },
  },
  subheading: {
    fontSize: { xs: "14px", md: "16px", lg: "14px" },
    color: COLOR.PRIMARY,
    marginTop: "5px",
    "@media (min-width: 1200px)": {
      fontSize: "14px",
    },
  },
};
