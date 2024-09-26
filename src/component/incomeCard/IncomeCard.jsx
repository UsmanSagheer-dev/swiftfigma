import { Box } from "@mui/material";
import IncomeFirstCard from "../incomefirstcard/IncomeFirstCard";
import CustomBarChart from "../barchart/Barchart";

export default function IncomeCard() {
  return (
    <Box sx={Styles.container}>
      <Box sx={Styles.first}>
        <IncomeFirstCard />
      </Box>
      <Box sx={Styles.second}>
        <CustomBarChart />
      </Box>
    </Box>
  );
}

const Styles = {
  container: {
    width: "565px", // Fixed width for large screens
    height: "240px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px 22px",
    borderRadius: "4px",
    gap:"15px",
    border: "0.75px solid #00000020",
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out",
    gap: "12px",
    // Media query for responsiveness
    "@media (max-width: 900px)": {
    
      alignItems: "start",
      width: {xs:'90%',md:'100%'}, // Full width for screens smaller than 900px
      flexWrap: "wrap", // Enable flex-wrap
      height: "auto", // Adjust height for wrapping content
    },
  },
  first: {
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
    gap: { xs: "10px", md: "22px" },
    width: "50%",
    height: "100%",
    "@media (max-width: 900px)": {
      width: "100%", 
      height: "auto", 
    },
  },
  second: {
    width: "50%", 
    height: "100%",
    "@media (max-width: 900px)": {
 
width:"90%"
    },
  },
};
