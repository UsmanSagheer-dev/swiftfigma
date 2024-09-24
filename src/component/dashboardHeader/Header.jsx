import { Box, Typography } from "@mui/material";
import { IMAGES } from '../../assets/images/index';
import SearchInput from "../searchinput/searchinput";
import { FONTS, COLOR } from '../constant/Constant'; // Use named imports

function Header() {
  return (
    <Box sx={Style.header}>
      <Box sx={Style.infoContainer}>
        {/* Image */}
        <Box sx={Style.first}>
          <Box sx={Style.infor}>
            <img src={IMAGES.porfileimg} alt="Profile" />
          </Box>

          {/* Text */}
          <Box sx={Style.textContainer}>
            <Typography variant="h6" sx={Style.heading}> 
              Welcome Back,{" "}
              <Typography variant="span" sx={Style.name}>
                Sophia Chester
              </Typography>
            </Typography>

            {/* New Text Below Heading */}
            <Typography variant="body1" sx={Style.subheading}>
              Here are your monthly store updates.
            </Typography>
          </Box>
        </Box>
        <Box>
          <SearchInput />
        </Box>
      </Box>
    </Box>
  );
}

export default Header;

const Style = {
  header: {
    width: "100%",
    height: "auto",
    backgroundColor: "orange",
    display: "flex",
    alignItems: "center",
    padding: "40px",
  },
  infoContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: 'space-between',
    gap: "10px",
  },
  first: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "22px",
  },
  infor: {
    cursor: "pointer",
    "& img": {
      width: "89px",
      height: "89px",
      borderRadius: "50%",
    },
    "&:hover": {
      backgroundColor: "#f1f1f1",
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  heading: {
    fontFamily: FONTS.ALBERT,
    fontSize: "24px",
    fontWeight: "700",
    color: COLOR.TEXT, // Use color from constants
  },
  name: {
    color: COLOR.TEXT,
    fontWeight: "bold",
  },
  subheading: {
    fontSize: "16px",
    color: COLOR.TEXT,
    marginTop: "5px",
  },
};
