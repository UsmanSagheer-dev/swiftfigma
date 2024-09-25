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

        {/* Responsive Search Input */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}> {/* Hide on small screens */}
          <SearchInput />
        </Box>
      </Box>
    </Box>
  );
}

export default Header;

const Style = {
  header: {
    width: { xs: '100%', md: '815px', lg: '100%' }, // Set width to 815px for tablets
    height: "auto",
    backgroundColor: "white",
    flexWrap: 'wrap',
   marginRight: "50px",
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
    gap: { xs: "10px", md: "22px" },
  },
  infor: {
    cursor: "pointer",
    "& img": {
      width: { xs: "61px", lg: "81px" }, // 61px for small screens (xs), 81px for large screens (lg)
      height: { xs: "61px", lg: "81px" }, // Set corresponding height for consistency
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
    fontSize: { xs: "16px", md: "24px", lg: "21px" }, // Font size adjusts for different breakpoints
    fontWeight: "700",
    "@media (min-width: 1200px)": { // Adjust font size for 1200px screen width
      fontSize: "21px",
    },
  },
  name: {
    color: COLOR.TEXT,
    fontWeight: "bold",
  },
  subheading: {
    fontSize: { xs: "14px", md: "16px", lg: "14px" }, // Font size adjusts for different breakpoints
    color: COLOR.PRIMARY,
    marginTop: "5px",
    "@media (min-width: 1200px)": { // Adjust subheading size for 1200px screen width
      fontSize: "14px",
    },
  },
};
